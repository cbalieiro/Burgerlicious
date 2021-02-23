import React, { useState } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Menu from "../../components/menu";

const Hall = () => {

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));

  const [totalToPay, setTotal] = useState(0)

  return (
    <>
      <Header
        role={'Attendant'}
        name={nameLS.name}
      />

      <main className="home">
        <section className="menu-details">
          <Menu />
        </section>

        <section className="order-summary">
          <section className="section-order-summary">
            <label>
              Client:
            <input type="text" placeholder="Client name" />
            </label>
            <label>
              Table:
            <input type="number" placeholder="Table number" />
            </label>
          </section>
          <p>
            Aqui vai aparecer o resumo do pedido
          </p>
          <section className="section-order-summary">
            <p>{totalToPay}</p>
            <button>CANCEL</button>
            <button>SEND</button>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
};

export default Hall;