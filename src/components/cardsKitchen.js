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
  return (
    <div key={key} className="card-template">
      <div>
        <CardsHeader table={table} clientName={clientName} date={date} />
      </div>
      <div>
        <table style={{ border: '1' }}>
          <tr>ORDER SUMMARY</tr>
          <tr>
            <td>QTD</td>
            <td>PRODUCTS</td>
          </tr>
          {product.map(({ name, flavor, complement, qtd }) => (
            <tr>
              <CardsBody
                name={name}
                flavor={flavor}
                complement={complement}
                qtd={qtd}
              />
            </tr>
          ))}
        </table>
      </div>
      <Button status={status} id={id} />
    </div>
  );
};

export default CardsKitchen;
