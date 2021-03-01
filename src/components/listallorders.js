import React from 'react';
import RequestOptions from './object/requestOptions';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';


function ListOrders() {
  const { data, request } = useFetch();
  // const [pending, setPending] = React.useState(null);
  // const [done, setDone] = React.useState(null);
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token, role } = nameLS;

  React.useEffect(() => {
    async function fetchOrders() {
      const method = RequestOptions.getAndDelete('GET', token);
      const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
      const { response, json } = await request(URL, method);
      if (role === 'kitchen') {
        console.log("Hello Kitchen");
      }
      else if (role === 'Hall') {
        console.log("Hello Hall");
      }
    }
    fetchOrders();
  }, [request, token, role]);

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
