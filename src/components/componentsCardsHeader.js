import React from 'react';

const CardsHeader = ({ clientName, table, date }) => (
  <>
    <p>Table:{" "}{table} </p>
    <p>Client:{" "}{clientName}</p>
    <p>Time:{" "}{date}</p>
  </>
);
export default CardsHeader;
