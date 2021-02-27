import React from 'react';
import RequestOptions from './object/requestOptions';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';

function ListOrders() {
  const { data, request } = useFetch();
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token } = nameLS;

  React.useEffect(() => {
    async function fetchOrders() {
      const method = RequestOptions.getAndDelete('GET', token);
      const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
      const { response, json } = await request(URL, method);
      console.log(json, response);
    }
    fetchOrders();
  }, [request, token]);

  function result() {
    if (data) {
      return (
        <>
          {data
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item) => {
              return (
                <div key={item.id} className="card-template">
                  <CardsKitchen>{item}</CardsKitchen>
                </div>
              );
            })}
        </>
      );
    } else return null;
  }

  return result();
}

export default ListOrders;
