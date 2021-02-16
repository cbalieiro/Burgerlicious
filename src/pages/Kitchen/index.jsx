import React from 'react';
import CardsKitchen from '../../components/cardsKitchen'
import HeaderKitchen from '../../components/headerKitchen'

const date = new Date();

const teste = {
  id: 1,
  clientName: "Camila",
  userId: 296,
  table: "007",
  status: "Pending",
  processedAt:"",
  createdAt: date.getTime(),
  updatedAt:"",
  products:	[{
    id: 1,
    name: "Café americano" ,
    flavor: null,
    complement: null,
    qtd: 2
    }]
  }

const Kitchen = () => {
const nameLS = JSON.parse(localStorage.getItem('currentUser'));
const {name, role} = nameLS;
const {table, clientName, createdAt} = teste;


function result () {
  if (role === "kitchen"){
    return <div>
      <HeaderKitchen chef={`${name}`}/>
      <CardsKitchen table={table} clientName={clientName} createdAt={createdAt}  />
      <h1>Aqui só tem Chefs</h1>
    </div>
  }
  else {
    return alert("bocó")
  }
  
};

  return result()

  };

export default Kitchen;
