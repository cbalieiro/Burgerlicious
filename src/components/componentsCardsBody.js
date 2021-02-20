import React from 'react';

const CardsBody = ({qtd,name}) => (
      <div>
        <div className="order-title">
          <h2>ORDER SUMMARY:</h2>
        </div>
        <div className="products-info">
          <h3> <span>QT</span> PRODUCTS </h3>
          <p> <span>{qtd} </span>{name}</p>
        </div>
      </div>
);

export default CardsBody;