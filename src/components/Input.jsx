/* eslint-disable array-callback-return */
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
import sun from '../public/sun.png';
import moon from '../public/moon.png';

const Input = ({ setAllData, setShowAll }) => {
  const [wish, setWish] = useState('');
  const [web3, setProvider] = useState(null);
  const [account, setAccounts] = useState(null);
  const [contractInstance, setContract] = useState(null);
  const [hiddenScene, setScene] = useState(true);

  /**
   * On hover of rocket, renders a string to the client indicating click functionality
   */

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Empty the Sky, and Start Anew.
    </Tooltip>
  );

  const renderTooltipUsers = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Reveal all past wishes in the bitverse, unhashed.
    </Tooltip>
  );
  const renderTooltipHide = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Reveal only hashed wishes.
    </Tooltip>
  );

  /**
   * On rendering of Input component, establishes connection with web3 provider,
   * gets reference to contract instance, and accesses an account used to make calls to contract
   */

  useEffect(async () => {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
    } else {
      console.log('Consider downloading and using metamask!');
    }
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
 *When client clicks on #moon, fn hides the stars called previously from storage on the blockchain,
 and instead shows only those that are held locally in the database
 */
  const showLimit = () => {
    setShowAll(false);
    setScene(true);
    Router.push({
      pathname: '/',
    });
  };
  /**
 *When client clicks on #sun, fn makes a call to the deployed smart contract,
 getting all wishes that have been stored on the blockchain, converts
 them from bytes32 into a string, and then executes logic
 (using hooks) to render all the data
 */

  const getAll = async () => {
    const result = [];
    try {
      await contractInstance.methods.getWishes().call({
        from: account,
      })
        .then((data) => {
          for (let i = 0; i < data.length; i += 1) {
            result.push(web3.utils.hexToAscii(data[i]));
          }
          setAllData(result);
        });
    } catch (error) {
      console.log('Error when calling getAllWishes', error);
    }
    setShowAll(true);
    setScene(false);
    Router.push({
      pathname: '/',
    });
  };
  /**
 * After client inputs a string (bytes32), the onSubmit fn makes a call to
 * the contract's hashWish fn, emitting an event which the server will pick up.
 * An api will then hash the string and send to db for storage
 * @param {*} e
 */

  const onSubmit = async (e) => {
    e.preventDefault();
    const params = web3.utils.asciiToHex(wish);
    try {
      await contractInstance.methods.hashWish(params).send({
        from: account,
      });
    } catch (error) {
      console.log('Error when calling contract to hashWish', error);
    }

    setWish('');

    /**
   * setTimeout to reroute to index.js after one second. GetIntialProps
   * will update the new state of star data
   * @param {*} e
   */
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
          animate={{ y: -30, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 13 }}
          id="rocket-container"
        >
          <Image className="rocket" onClick={onSend} src={rocket} width={80} height={100} alt="rocket" />
        </motion.div>
      </OverlayTrigger>
      {hiddenScene
        ? (
          <motion.div
            animate={{ y: -30, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 13 }}
            id="scene"
            role="button"
            tabIndex={0}
            onClick={() => getAll()}
            onKeyUp={getAll}
          >
            <OverlayTrigger
              style={{ zIndex: '7', fontSize: '16px' }}
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipUsers}
            >
              <Image src={sun} width={70} height={70} />
            </OverlayTrigger>
          </motion.div>
        )
        : (
          <motion.div
            animate={{ y: -30, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 13 }}
            id="scene"
            role="button"
            tabIndex={0}
            onClick={() => showLimit()}
            onKeyUp={getAll}
          >
            <OverlayTrigger
              style={{ zIndex: '7', fontSize: '16px' }}
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipHide}
            >
              <Image src={moon} width={70} height={70} />
            </OverlayTrigger>
          </motion.div>
        )}
    </div>
  );
};

export default Input;
