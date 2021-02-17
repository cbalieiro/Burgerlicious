import React from 'react';

const CardsBody = (props) => (
      <div>
        <div className="order-title">
          <h2>ORDER SUMMARY:</h2>
        </div>
        <div className="products-info">
          <h3> <span>QT</span> PRODUCTS </h3>
          <p> <span>{props.qtd} </span>{props.clientName}</p>
        </div>
      </div>
);

export default CardsBody;