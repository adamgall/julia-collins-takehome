import React, { useState } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Web3 from 'web3';
import {abi, address} from '../../contractData';

const Input = () => {
 
  const [wish, setWish] = useState('');
  const [message, setMessage] = useState('');


const onSubmit = async (e) => {
  console.log('here')
 const web3 = new Web3('https://rinkeby.infura.io/v3/aeb481bbd64a4f59a4e3a2d3d6f71c73');
 const contractInstance = new web3.eth.Contract(abi, address);
 console.log(contractInstance)
  try {
    await contractInstance.methods.hashWish(wish).send({
      from: accounts[0]
    })
    console.log('hitting')
  } catch (error) {
    setMessage('Error detected')
  }
   
    setWish('');
  }


  return (
    <div className='input-form'>
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
  )
}

export default Input;
