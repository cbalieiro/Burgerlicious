import React from 'react';
import CardsHeader from './componentsCardsHeader'
import CardsBody from './componentsCardsBody'

const CardsKitchen = ({table,clientName,createdAt,qtd,name}) => (
  <div className="card-template">
    <CardsHeader table={table} clientName={clientName} createdAt={createdAt}/>
    <CardsBody qtd={qtd} name={name}/>
  </div>
);

export default CardsKitchen;