import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'


const CardsKitchen = ({ children, props }) => {
    return (
    <>
    <div className="card-container-text">
      <CardsHeader key={Math.random()}>{children}</CardsHeader>
      <hr />
      <CardsBody key={Math.random()} onClick={props}>{children}</CardsBody>
    </div>
    </>
  );
};

export default CardsKitchen;
