import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal'

const ModalMessage = (props) => { 
  return (
    <div className="back">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <p className="modal-text">
            {props.message}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalMessage;