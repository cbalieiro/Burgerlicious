import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'

const CardsKitchen = (props) => (
  <div className="card-template">
    <CardsHeader table={props.table} clientName={props.clientName} createdAt={props.createdAt}/>
    <CardsBody props={props}/>
  </div>
);

export default CardsKitchen;