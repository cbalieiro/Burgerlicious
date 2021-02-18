import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CardsKitchen from '../../components/cardsKitchen'

const date = new Date();

const teste = {
  id: 1,
  clientName: "Camila",
  userId: 296,
  table: "007",
  status: "Pending",
  processedAt: "",
  createdAt: date.getTime(),
  updatedAt: "",
  products: [{
    id: 1,
    name: "Café americano",
    flavor: null,
    complement: null,
    qtd: 2
  }]
}

const Kitchen = () => {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { table, clientName, createdAt } = teste;

  return (
    <>
      <Header
        role={'Chef'}
        name={nameLS.name}
      />

      <main className="home">
        <h1>
          <CardsKitchen table={table} clientName={clientName} createdAt={createdAt} />
        </h1>
      </main>

      <Footer />
    </>
  )
};

export default Kitchen;
