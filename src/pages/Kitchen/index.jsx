import React from 'react';
import Header from '../../components/headerKitchen'
import Footer from "../../components/footer";

const Kitchen = () => {
// const nameLS = JSON.parse(localStorage.getItem('currentUser'));
// const {name, role} = nameLS;
// // function result () {
// //   if (role === "kitchen"){
// //     return <div>
// //       <Header 
// //         role={'Chef'}
// //         name={`${name}`}
// //       />
// //       <h1>Aqui só tem Chefs</h1>
// //     </div>
// //   }
// //   else {
// //     return alert("bocó")
// //   }
  
// // };
// //   return result()

const nameLS = JSON.parse(localStorage.getItem('currentUser'));

return (
  <>
    <Header
      role={'Chef'}
      name={nameLS.name}
    />
    <main className="main-kitchen">
      <h1>Aqui aparecerá os pedidos</h1>
    </main>
    <Footer />
  </>
)

  };

export default Kitchen;
