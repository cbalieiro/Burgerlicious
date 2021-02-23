import React from 'react';

const CardsHeader = ({ clientName, table, date }) => (
  <div>
    <div className="card-table-info">
      <p className="text-card">Table:</p>
      <p className="title-number-card">{table}</p>
    </div>
    <div>
      <p className="title-card">
        {' '}
        Client: <span className="title-card">{clientName}</span>
      </p>
      <p className="title-card">
        {' '}
        Time: <span className="text-card">{date}</span>
      </p>
    </div>
  </div>
);
export default CardsHeader;
