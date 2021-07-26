import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
const ModalData = (props) => {

  function onClick(){
    props.setShowData(false);
  }

  return (
    <div id='modal'>
    <Modal.Dialog>
    <Modal.Header>
      <Modal.Title>Your Wish, Immemorialized In The Stars</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <p>{props.starData._id} - Star Speak</p>
    </Modal.Body>
  
    <Modal.Footer>
      <Button onClick={()=> onClick()} variant="secondary">Close</Button>
    </Modal.Footer>
  </Modal.Dialog>
  </div>
  )
}

export default ModalData;
