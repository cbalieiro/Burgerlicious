import React from 'react';
import RequestOptions from './object/requestOptions';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';
import Button from './buttonorderstatus';

function ListOrders() {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token, role, id } = nameLS;

  const { data, request } = useFetch();
  const [pending, setPending] = React.useState(null);
  const [done, setDone] = React.useState(null);
  const [orderlist, setOrderlist] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

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
    fetchOrders();
    setLoading(false);
  }, [request, token, role, id]);

  React.useEffect(() => {
    if (!data) return;
    if (pending) {
      setOrderlist(pending);
    }
    if (done) {
      setOrderlist(done);
    }
  }, [data, done, pending]);

  function handleClick(event, id) {
    console.log(event, id);
  }

  function result() {
    if (orderlist) {
      return (
        <>
          {loading && <p>Carregando...</p>}
          {orderlist
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item) => {
              return (
                <div key={item.id} className="card-template">
                  <CardsKitchen>{item}</CardsKitchen>
                  {pending && (
                    <Button
                      key={Math.random()}
                      onClick={(e) => handleClick(e, item.id)}
                      className={
                        item.status === 'pending' ? 'btn-doing' : 'btn-done'
                      }
                    >
                      {' '}
                      {item.status === 'pending' ? 'DOING' : 'DONE'}{' '}
                    </Button>
                  )}
                  {done && (
                    <Button
                      key={item.id}
                      onClick={(e) => handleClick(e, item.id)}
                      className={
                        item.status === 'done' ? 'btn-done' : 'btn-doing'
                      }
                    >
                      {' '}
                      {item.status === 'done' ? 'SEND' : 'DELIVERED'}{' '}
                    </Button>
                  )}
                </div>
              );
            })}
        </>
      );
    } else {
      return null;
    }
  }
  return result();
}
export default ListOrders;
