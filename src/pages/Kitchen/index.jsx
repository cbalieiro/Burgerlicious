import React, { useState } from "react";
import RequestOptions from "../../components/object/requestOptions";
// import AllModelsObject from "../../components/object/models";
import CallAPI from "../../services/api";
import HeaderKitchen from "../../components/headerKitchen";
import CardsKitchen from "../../components/cardsKitchen";

// const orderData = AllModelsObject.ordersList;

const teste = {
  id: 1,
  clientName: "Camila",
  userId: 296,
  table: "007",
  status: "Pending",
  processedAt: "",
  createdAt: "",
  updatedAt: "",
  products: [
    {
      id: 1,
      name: "Café americano",
      flavor: null,
      complement: null,
      qtd: 2,
    },
  ],
};

const Kitchen = () => {
  // const [orderDB, setorderDB] = useState([]);
  const nameLS = JSON.parse(localStorage.getItem("currentUser"));
  const { name, role, token } = nameLS;

  const { table, clientName, createdAt } = teste;

  // const orderList = () => {
  //   const method = RequestOptions.getAndDelete("GET", token);
  //   const URL = "https://lab-api-bq.herokuapp.com/orders  ";

  //   CallAPI(URL, method)
  //   .then((json) => {
  //     console.log(json);
  //     setorderDB([...orderDB,json])
  //     // const orders = json;
  //     // orders.forEach((item) => {
  //     // console.log(item)
  //     // setOrderList(item)});
  //   });
    
  // };

  // orderList();

  function result() {
    if (role === "kitchen") {
      
      return (
        // orderDB.forEach((item) => {console.log(item))
        <div>
          <HeaderKitchen chef={`${name}`} />
          <CardsKitchen
            table={table}
            clientName={clientName}
            createdAt={createdAt}
          />
        </div>
      );
    } else {
      return alert("Você não possui acesso a esse Módulo");
    }
  }

  return result();
};

export default Kitchen;
