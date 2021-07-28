/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {
  InputGroup, FormControl, Button, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import Router from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import rocket from '../public/rocket.png';

const Input = () => {
  const [wish, setWish] = useState('');
  const [web3, setProvider] = useState(null);
  const [account, setAccounts] = useState(null);
  const [contractInstance, setContract] = useState(null);

  /**
   * On hover of rocket, renders a string to the client indicating click functionality
   * @param {props} props
   */

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to Empty the Sky, and Start Anew.
    </Tooltip>
  );

  /**
   * On rendering of Input component, establishes connection with web3 provider,
   * gets reference to contract instance, and accesses an account used to make calls to contract
   */

  useEffect(async () => {
    const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545'));
    setProvider(web3);
    // const web3 = new Web3(new Web3.providers.WebsocketProvider(URL));
    const contract = new web3.eth.Contract(process.env.CONTRACT_ABI, process.env.CONTRACT_ADDRESS);
    setContract(contract);
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts[0]);
  }, []);

  /**
 * When client clicks the #rocket, onSend fn makes an API request to empty the
 * mongoDB collection 'wishes'
 */

  const onSend = async () => {
    try {
      await contractInstance.methods.drainWishes().send({
        from: account,
      });
    } catch (error) {
      console.log('Error when calling contract to drainWishes', error);
    }
    setTimeout(() => {
      Router.push({
        pathname: '/',
      });
    }, 1000);
  };

  /**
 * After client inputs a string (bytes32), the onSubmit fn makes a call to
 * the contract's hashWish fn, emitting an event which the server will pick up.
 * An api will then hash the string and send to db for storage
 * @param {*} e
 */

  const onSubmit = async (e) => {
    e.preventDefault();

    const params = web3.utils.asciiToHex(wish).padEnd(66, '0');
    try {
      await contractInstance.methods.hashWish(params).send({
        from: account,
      });
    } catch (error) {
      console.log('Error when calling contract to hashWish', error);
    }

    setWish('');
    // setTimeout and reroute to index.js so getInitialProps can update state of stars
    setTimeout(() => {
      Router.push({
        pathname: '/',
      });
    }, 1000);
  };

  return (
    <div>
      <div id="input-form">
        <InputGroup className="mb-3" id="form" onSubmit={onSubmit}>
          <Button onClick={onSubmit} variant="outline-secondary" id="button-addon1">
            Button
          </Button>
          <FormControl
            aria-label="form-button"
            aria-describedby="basic-addon1"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
        </InputGroup>
      </div>
      <OverlayTrigger
        style={{ zIndex: '7', fontSize: '16px' }}
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <motion.div
          animate={{ y: -30 }}
          transition={{ type: 'spring', stiffness: 10 }}
          id="rocket-container"
        >
          <Image className="rocket" onClick={onSend} src={rocket} width={80} height={100} alt="rocket" />
        </motion.div>
      </OverlayTrigger>
    </div>
  );
};

export default Input;
