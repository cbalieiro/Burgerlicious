import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";

const Hall = () => {

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <>
      <Header
        role={'Attendant'}
        name={nameLS.name}
      />

      <main className="home">
        <h1>Aqui aparecerá os outros componentes</h1>
      </main>

      <Footer />
    </>
  )
};

export default Hall;
