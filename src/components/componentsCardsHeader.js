import React from 'react';

const CardsHeader = ({ children }) => {
  const { client_name, table, createdAt } = children;
  const date = new Date(createdAt);
  const hour = `${date.getHours()}:${date.getMinutes()}`;
  
  return (
    <div>
      <div className="card-table-info">
        <p className="text-card">Table:</p>
        <p className="title-number-card">{table}</p>
      </div>
      <div>
        <p className="title-card">
          {' '}
          Client: <span className="title-card">{client_name}</span>
        </p>
        <p className="title-card">
          {' '}
          Order Time: <span className="text-card">{hour}</span>
        </p>
      </div>
    </div>
  );
};

export default CardsHeader;
