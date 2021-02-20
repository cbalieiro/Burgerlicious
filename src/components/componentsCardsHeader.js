import React from 'react';

const CardsHeader = ({ table, clientName, createdAt }) => (
  <div>
    <div className="table-info">
      <p>Table:</p>
      <p>{table}</p>
    </div>
    <div className="attendant-info">
      <p>Attendant:{clientName} </p>
      <p>Time: {createdAt}</p>
    </div>
  </div>
);

export default CardsHeader;
