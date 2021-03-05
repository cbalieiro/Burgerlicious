import React from 'react';
import Header from '../../components/header';
import ListOrders from '../../components/listallorders';
import Footer from '../../components/footer';
import { useHistory } from "react-router-dom";

const Kitchen = () => {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { name, role } = nameLS;
  const history = useHistory();

  if (role !== 'kitchen') {
    history.push("/")
    return null
  }
  return (
    <section>
      <Header role={role} name={name} />
      <section className="container-cards">
        <ListOrders />
      </section>
      <Footer />
    </section>
  );
};

export default Kitchen;
