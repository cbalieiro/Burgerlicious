import React from 'react';
import RequestOptions from './object/requestOptions';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';
import Button from './buttonorderstatus';

function ListOrders({ filterType }) {
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token, role, id } = nameLS;
  const type = filterType;

  const { data, request } = useFetch();
  const [pending, setPending] = React.useState(null);
  const [done, setDone] = React.useState(null);
  const [finish, setFinish] = React.useState(null);
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
      if (role === 'hall' && type === 'processing') {
        const orderDone = json.filter(
          ({ status, user_id }) => status !== 'finished' && user_id === id,
        );
        setDone(orderDone);
      }
      if (type === 'finished') {
        const orderDone = json.filter(({ status }) => status === 'finished');
        setFinish(orderDone);
      }
    }
    fetchOrders();
    setLoading(false);
  }, [request, token, role, id, type]);

  React.useEffect(() => {
    if (!data) return;
    if (pending) {
      setOrderlist(pending);
    }
    if (done) {
      setOrderlist(done);
    }
    if (finish) {
      setOrderlist(finish);
    }
  }, [data, done, finish, pending]);

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
                  {pending && item.status !== 'finished' && (
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
                  {done && item.status === 'done' && (
                    <Button
                      key={item.id}
                      onClick={(e) => handleClick(e, item.id)}
                      className={item.status === 'done' && 'btn-done'}
                    >
                      {' '}
                      {'DELIVERED'}{' '}
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
