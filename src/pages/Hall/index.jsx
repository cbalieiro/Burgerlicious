import React from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Menu from "../../components/menu";

const Hall = () => {

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));

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
      </main>
    
      <Footer />
    </>
  )
};

export default Hall;
