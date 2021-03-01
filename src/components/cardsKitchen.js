import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'


const CardsKitchen = ({ children, props }) => {
    return (
    <>
    <div className="card-container-text">
      <CardsHeader>{children}</CardsHeader>
      <hr />
      <CardsBody onClick={props}>{children}</CardsBody>
    </div>
    </>
  );
};

export default CardsKitchen;
