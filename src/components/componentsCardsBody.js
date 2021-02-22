import React from 'react';

const CardsBody = ({ name, flavor, complement, qtd }) => (
  <>
    <td>{qtd}</td>
    <td>
      <p>{name}</p>
      <p>{flavor}</p>                                                      
      <p>{complement}</p>
    </td>
  </>
);

export default CardsBody;
