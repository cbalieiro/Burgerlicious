import React from 'react';
import RequestOptions from './object/requestOptions';
import CallAPI from '../services/api';
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

  const listOrdersAPI = () => {
    const method = RequestOptions.getAndDelete('GET', token);
    const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
    CallAPI(URL, method).then((json) => {
      if (role === 'kitchen') {
        const orderPending = json.filter(
          ({ status }) => status !== 'done' && status !== 'finished',
        );
        setPending(orderPending);
      }
      if (role === 'hall' && type === 'processing') {
        const orderDone = json.filter(({ status }) => status !== 'finished');
        setDone(orderDone);
      }
      if (type === 'finished') {
        const orderDone = json.filter(({ status }) => status === 'finished');
        setFinish(orderDone);
      }
    });
  };

  React.useEffect(() => {
    async function fetchOrders() {
      const method = RequestOptions.getAndDelete('GET', token);
      const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
      const { json } = await request(URL, method);
      if (role === 'kitchen') {
        const orderPending = json.filter(
          ({ status }) => status !== 'done' && status !== 'finished',
        );
        setPending(orderPending);
      }
      if (role === 'hall' && type === 'processing') {
        const orderDone = json.filter(({ status }) => status !== 'finished');
        setDone(orderDone);
      }
      if (type === 'finished') {
        const orderDone = json.filter(({ status }) => status === 'finished');
        setFinish(orderDone);
      }
    }
    fetchOrders();
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

  const handleStatus = (event, id, status) => {
    const URL = `https://lab-api-bq.herokuapp.com/orders/${id}  `;

    if (status === 'pending') {
      const body = 'doing';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then(() => listOrdersAPI());
    }
    if (status === 'doing') {
      const body = 'done';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then(() => listOrdersAPI());
    }
    if (status === 'done') {
      const body = 'finished';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then(() => listOrdersAPI());
    }
  };

  const handleDelete = (event, id, status) => {
    console.log(event);
    if (status === 'pending') {
      const method = RequestOptions.getAndDelete('DELETE', token);
      const URL = `https://lab-api-bq.herokuapp.com/orders/${id}  `;
      CallAPI(URL, method).then(() => listOrdersAPI());
    }
  };

  function result() {
    if (orderlist) {
      return (
        <>
          {orderlist
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item) => {
              return (
                <div key={item.id} className="card-template">
                  <CardsKitchen>{item}</CardsKitchen>

                  {pending &&
                    item.status === 'pending' &&
                    item.status !== 'finished' && (
                      <Button
                        key={Math.random()}
                        onClick={(e) => handleStatus(e, item.id, item.status)}
                        className={item.status === 'pending' && 'btn-doing'}
                      >
                        {item.status === 'pending' && 'DOING'}
                      </Button>
                    )}

                  {pending &&
                    item.status === 'doing' &&
                    item.status !== 'finished' &&
                    (
                      <Button
                        key={Math.random()}
                        onClick={(e) => handleStatus(e, item.id, item.status)}
                        className={item.status === 'doing' && 'btn-done'}
                      >
                        {item.status === 'doing' && 'DONE'}
                      </Button>
                    )}

                  {done && item.status === 'done' && (
                    <Button
                      key={item.id}
                      onClick={(e) => handleStatus(e, item.id, item.status)}
                      className={item.status === 'done' && 'btn-done'}
                    >
                      {'DELIVERY'}
                    </Button>
                  )}
                  {done && item.status === 'pending' && role === 'hall' && (
                    <Button
                      key={item.id}
                      onClick={(e) => handleDelete(e, item.id, item.status)}
                      className={item.status === 'pending' && 'btn-done'}
                    >
                      {'DELETE'}
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
