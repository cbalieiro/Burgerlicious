import React from 'react';
import React, { useState } from 'react';
import RequestOptions from '../../components/object/requestOptions';
// import AllModelsObject from "../../components/object/models";
import CallAPI from '../../services/api';
import HeaderKitchen from '../../components/headerKitchen';
import CardsKitchen from '../../components/cardsKitchen';

// const orderData = AllModelsObject.ordersList;

const Kitchen = () => {
  const [orderDB, setOrderDB] = useState(0);
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
      return orderDB.forEach((item) => {
        console.log(item);
        return (
          <>
            <HeaderKitchen />
            <CardsKitchen />
          </>
        );
      });
    } else {
      return alert('Você não possui acesso a esse Módulo');
    }
  }

  return result();
};

export default Kitchen;
