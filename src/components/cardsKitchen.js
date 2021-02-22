import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'
import Button from './buttonstatus'

const CardsKitchen = () => (
   <div className="card-template">
    <CardsHeader />
    <CardsBody />
    <Button status="peding" />
  </div>
);

export default CardsKitchen;