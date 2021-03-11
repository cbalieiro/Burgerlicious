/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal'

const ModalMessage = (props) => (
  <div className='back'>
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <p className='modal-text'>Do you really want to cancel?</p>
        <button type='button' onClick={() => props.cancelOrder(true)}>
          YES
        </button>
        <button type='button' onClick={() => props.cancelOrder(false)}>
          NO
        </button>
      </Modal.Body>
    </Modal>
  </div>
)

export default ModalMessage
