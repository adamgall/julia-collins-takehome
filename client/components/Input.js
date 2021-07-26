import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS, URL  } from '../../contractData';
import Stars from './Stars';
import Router from 'next/router'
import Image from 'next/image';
import rocket from '../public/rocket.png';
const Input = (props) => {
 
  const [wish, setWish] = useState('');
  const [message, setMessage] = useState('');

const onSubmit = async (e) => {
  e.preventDefault();
  let web3;
  //getInitialProps migrate once connected
  //is client connected to provider? if yes...
  // set the provider you want from Web3.providers -- use local ganache
  web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:7545')); 

  // const web3 = new Web3(new Web3.providers.WebsocketProvider(URL));  
  const contractInstance = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  const params = web3.utils.asciiToHex(wish).padEnd(66, "0");
  let accounts = await web3.eth.getAccounts();

  await contractInstance.methods.hashWish(params).send({
      from: accounts[0]
    });
    const results = await contractInstance.getPastEvents(
      'WishMade',
      {}
    )
    setWish('');
    //setTimeout and reroute to index.js so getInitialProps can update state of stars
    setTimeout(()=> {
      Router.push({
        pathname: '/'
    })
    }, 1000)
  }
  return (
    <div>
    <div id='input-form'>
    <InputGroup className="mb-3" id='form' onSubmit={onSubmit}>
    <Button onClick={onSubmit} variant="outline-secondary" id="button-addon1">
      Button
    </Button>
    <FormControl
      aria-label="form-button"
      aria-describedby="basic-addon1"
      value={wish}
      onChange={e => setWish(e.target.value)}
    />
  </InputGroup>
    </div>
    <div id="rocket-container">
    <Image className="rocket" src={rocket} width={160} height={200} alt="rocket" />
    </div>
    </div>
  )
}

export default Input;
