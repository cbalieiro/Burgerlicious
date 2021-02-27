import React from 'react';
import Header from '../../components/header';
import ListOrders from '../../components/listorders';
import Footer from '../../components/footer';

const Kitchen = () => {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { name, role } = nameLS;

  function result() {
    if (role === 'kitchen') {
      return (
        <>
          <Header role={role} name={name} />
          <section className="container-cards">
            <ListOrders />
          </section>
          <Footer />
        </>
      );
    } else return alert('Você não possui acesso a esse Módulo');
  }

  return result();
};

export default Kitchen;
