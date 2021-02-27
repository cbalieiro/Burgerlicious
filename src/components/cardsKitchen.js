import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'

const CardsKitchen = ({ children }) => {
  return (
    <div className="card-container-text">
      <CardsHeader>{children}</CardsHeader>
      <hr />
      <CardsBody>{children}</CardsBody>
    </div>
  );
};

export default CardsKitchen;
