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
            Do you really want to delete?
          </p>
          <section className="modal-bottom">
            <button className="modal-button yes-button" onClick={() => props.cancelOrder(true)}>YES</button>
            <button className="modal-button" onClick={() => props.cancelOrder(false)}>NO</button>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalMessage;