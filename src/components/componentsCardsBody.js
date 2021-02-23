import React from 'react';

const CardsBody = ({ name, flavor, complement, qtd }) => (
  <>
    <td className="text-card">{qtd}</td>
    <td>
      <p className="text-card">{name}</p>
      <p className="complement-text-card">{flavor}</p>                                                      
      <p className="complement-text-card">{complement}</p>
    </td>
  </>
);

export default CardsBody;
