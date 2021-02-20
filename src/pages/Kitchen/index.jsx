import React from 'react';
import React, { useState } from 'react';
import RequestOptions from '../../components/object/requestOptions';
// import AllModelsObject from "../../components/object/models";
import CallAPI from '../../services/api';
import CardsKitchen from '../../components/cardsKitchen';
import Header from '../../components/header';
import Footer from '../../components/footer';
import CardsKitchen from '../../components/cardsKitchen';

// const orderData = AllModelsObject.ordersList;

const Kitchen = () => {
  const [orderDB, setOrderDB] = useState([]);
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { name, role, token } = nameLS;

  const orderList = () => {
    const method = RequestOptions.getAndDelete('GET', token);
    const URL = 'https://lab-api-bq.herokuapp.com/orders  ';

    CallAPI(URL, method).then((json) => {
      setOrderDB([...orderDB, json]);
      // const orders = json;
      // orders.forEach((item) => {
      // console.log(item)
      // setOrderList(item)});
    });
  };

  function result() {
    if (role === 'kitchen') {
      // return orderDB.forEach((item) => {
      //   console.log(item);
      return (
        <>
          <Header role={role} name={name} />
        </>
      );
    } else {
      return alert('Você não possui acesso a esse Módulo');
    }
  }

  return result();
};
