import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ToastAlert = ({message, show, close }) => {

  return (
    <Row>
      <Col xs={6}>
        <Toast
          show={show}
          onClose={() => close(!show)}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Burgerlicious says:</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default ToastAlert;
