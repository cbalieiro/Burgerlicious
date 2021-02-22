import React from 'react';
import CardsHeader from './componentsCardsHeader';
import CardsBody from './componentsCardsBody';
import Button from './buttonstatus';

const CardsKitchen = ({
  key,
  id,
  clientName,
  table,
  status,
  date,
  product,
}) => {
  console.log(id, clientName, table, status, date, product);
  return (
    <div key={key} className="card-template">
      <CardsHeader />
      <CardsBody />
      <Button status="peding" />
    </div>
  );
};

export default CardsKitchen;
