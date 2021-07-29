/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalData = (props) => {
  /**
   *  Component renders on initial rendering of application, using the setShowData hook
   */
  function onClick() {
    props.setShowData(false);
  }

  return (
    <div id="modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">Your Dream, Immortalized In The Stars</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {props.starData.wish}
            - Star Speak
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onClick()} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalData;
