import React from 'react';
import RequestOptions from './object/requestOptions';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';

function ListOrders() {
  const { data, request } = useFetch();
  const [pending, setPending] = React.useState(null);
  const [done, setDone] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token, role, id } = nameLS;

  React.useEffect(() => {
    setLoading(true);
  }, []);

  React.useEffect(() => {
    async function fetchOrders() {
      const method = RequestOptions.getAndDelete('GET', token);
      const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
      const { json } = await request(URL, method);
      if (role === 'kitchen') {
        const orderPending = json.filter(({ status }) => status !== 'done');
        setPending(orderPending);
      }
      if (role === 'Hall') {
        const orderDone = json.filter(
          ({ status, uid }) => status === 'done' && uid === id,
        );
        setDone(orderDone);
      }
    }
    setLoading(false);
    fetchOrders();
  }, [request, token, role, id]);

  function result() {
    let orderlist = null;
    if (pending) {
      orderlist = pending;
    }
    if (done) {
      orderlist = done;
    }
    if (orderlist) {
      setTimeout(() => {}, 1000);
      return (
        <>
          {loading && <p>Carregando...</p>}
          {orderlist
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
    } else {
      orderlist = data;
      return null;
    }
  }
  return result();
}
export default ListOrders;
