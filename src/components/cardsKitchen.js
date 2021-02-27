import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'
import Button from './buttonorderstatus';

const CardsKitchen = ({ children }) => {
    return (
    <>
    <div className="card-container-text">
      <CardsHeader>{children}</CardsHeader>
      <hr />
      <CardsBody>{children}</CardsBody>
    </div>
    <Button/>
    </>
  );
};

export default CardsKitchen;
