import React, { useState } from "react";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import CallAPI from "../../services/api";
import HeaderKitchen from '../../components/headerKitchen'

const userData = AllModelsObject.authAndUsers;;

const Kitchen = () => {
const nameLS = JSON.parse(localStorage.getItem('currentUser'));
const {name, role} = nameLS;


function result () {
  if (role === "kitchen"){



    return <div>
      <HeaderKitchen chef={`${name}`}/>
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
