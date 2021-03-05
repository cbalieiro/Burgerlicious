import React from 'react';

const CardsBody = ({ children }) => {
  const { Products } = children;
  return (
    <div>
      <table>
        <tr className="title-card">
          <td colSpan="2"><h4 className="title-card">ORDER SUMMARY:</h4></td>
        </tr>

        <tr>
          <td style={{ width: '70px' }} className="title-card">QT</td>
          <td className="title-card">PRODUCTS</td>
        </tr>

        {Products.map(({ name, flavor, complement, qtd }) => {
          return (
            <tr>
              <td className="text-card">{qtd}</td>
              <td>
                <p className="text-card">{name}</p>
                <p className="complement-text-card">{flavor}</p>
                <p className="complement-text-card">{complement}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CardsBody;
