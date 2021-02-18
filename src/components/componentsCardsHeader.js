import React from 'react';

const CardsHeader = (props) => (
  <div>
    <div className="table-info">
      <p>Table:</p>
      <p>{props.table}</p>
    </div>
    <div className="attendant-info">
      <p>Attendant:{props.clientName} </p>
      <p>Time: {props.createdAt}</p>
    </div>
  </div>
);

export default CardsHeader;