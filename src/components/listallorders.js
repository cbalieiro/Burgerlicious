import React from 'react';
import RequestOptions from './object/requestOptions';
import CallAPI from '../services/api';
import useFetch from '../services/Hooks/useFetch';
import CardsKitchen from './cardsKitchen';
import Button from './buttonorderstatus';

function ListOrders({ filterType }) {
  const translatePTtoEN = {
    "Misto quente": "Cheese Sandwich",
    "Café americano": "Americano Coffee",
    "Café com leite": "Espresso Coffee",
    "Suco de fruta natural": "Orange juice",
    "Batata frita": "Fries",
    "Anéis de cebola": "Onion rings",
    "Água 500mL": "Water 500mL",
    "Água 750mL": "Water 750mL",
    "Refrigerante 500mL": "Soda 500mL",
    "Refrigerante 750mL": "Soda 750mL",
    "Hambúrguer simples": "Smash burger",
    "Hambúrguer duplo": "Double burger",
    "carne": "Meat",
    "frango": "Chicken",
    "vegetariano": "Veggie",
    "queijo": "Cheese",
    "ovo": "Egg"
}

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { token, role} = nameLS;
  const type = filterType;

  const { data, request } = useFetch();
  const [dataTranslated, setDataTranslated] = React.useState([]);
  const [pending, setPending] = React.useState(null);
  const [done, setDone] = React.useState(null);
  const [finish, setFinish] = React.useState(null);
  const [orderlist, setOrderlist] = React.useState(null);

  React.useEffect(() => {
    async function fetchOrders() {
      const method = RequestOptions.getAndDelete('GET', token);
      const URL = 'https://lab-api-bq.herokuapp.com/orders  ';
      await request(URL, method);
    }
    fetchOrders();
  }, [request, token]);

  React.useEffect(() => {
    if (!data) return;

    const allOrders = data;

    const ordersTranslated = allOrders.map((order) => {
      const translatedProducts = order.Products.map((item) => {
        return {
          ...item,
          name: translatePTtoEN[item.name],
          flavor: translatePTtoEN[item.flavor],
          complement: translatePTtoEN[item.complement],
        };
      });

      return {
        ...order,
        Products: translatedProducts,
      };
    });

    setDataTranslated(ordersTranslated);
  }, [data]);

  React.useEffect(() => {
    if (!dataTranslated) return;

    if (role === 'kitchen') {
      const orderPending = dataTranslated.filter(
        ({ status }) => status !== 'done' && status !== 'finished',
      );
      setPending(orderPending);
    }
    if (role === 'hall' && type === 'processing') {
      const orderDone = dataTranslated.filter(
        ({ status }) => status !== 'finished',
      );
      setDone(orderDone);
    }
    if (type === 'finished') {
      const orderDone = dataTranslated.filter(
        ({ status }) => status === 'finished',
      );
      setFinish(orderDone);
    }
  }, [data, dataTranslated, role, type]);

  React.useEffect(() => {
    if (!dataTranslated) return;

    if (pending) {
      setOrderlist(pending);
    }
    if (done) {
      setOrderlist(done);
    }
    if (finish) {
      setOrderlist(finish);
    }
  }, [dataTranslated, done, finish, pending]);

  const handleStatus = (index, id, status) => {
    const URL = `https://lab-api-bq.herokuapp.com/orders/${id}  `;

    if (status === 'pending') {
      const body = 'doing';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then((json) => {
        const newOrders = [...orderlist];
        newOrders.splice(index, 1, json);
        setOrderlist(newOrders);
      });
    }
    if (status === 'doing') {
      const body = 'done';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then((json) => {
        const newOrders = [...orderlist];
        newOrders.splice(index, 1);
        setOrderlist(newOrders);
      });
    }
    if (status === 'done') {
      const body = 'finished';
      const method = RequestOptions.put(token, body);
      CallAPI(URL, method).then((json) => {
        const newOrders = [...orderlist];
        newOrders.splice(index, 1);
        setOrderlist(newOrders);
      });
    }
  };

  const handleDelete = (index, id, status) => {
    if (status === 'pending') {
      const method = RequestOptions.getAndDelete('DELETE', token);
      const URL = `https://lab-api-bq.herokuapp.com/orders/${id}  `;
      CallAPI(URL, method).then((json) => {
        const newOrders = [...orderlist];
        newOrders.splice(index, 1);
        setOrderlist(newOrders);
      });
    }
  };

  function result() {
    if (orderlist) {
      return (
        <>
          {orderlist
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item, index) => {
              return (
                <div key={item.id} className="card-template">
                  <CardsKitchen key={item.name}>{item}</CardsKitchen>

                  {pending &&
                    item.status === 'pending' &&
                    item.status !== 'finished' && (
                      <Button
                        key={Math.random()}
                        onClick={() =>
                          handleStatus(index, item.id, item.status)
                        }
                        className={item.status === 'pending' && 'btn-doing'}
                      >
                        {item.status === 'pending' && 'DOING'}
                      </Button>
                    )}

                  {pending &&
                    item.status === 'doing' &&
                    item.status !== 'finished' && (
                      <Button
                        key={Math.random()}
                        onClick={() =>
                          handleStatus(index, item.id, item.status)
                        }
                        className={item.status === 'doing' && 'btn-done'}
                      >
                        {item.status === 'doing' && 'DONE'}
                      </Button>
                    )}

                  {done && item.status === 'done' && (
                    <Button
                      key={Math.random()}
                      onClick={() =>
                        handleStatus(index, item.id, item.status)
                      }
                      className={item.status === 'done' && 'btn-done'}
                    >
                      {'DELIVERY'}
                    </Button>
                  )}
                  {done && item.status === 'pending' && role === 'hall' && (
                    <Button
                      key={Math.random()}
                      onClick={() => handleDelete(index, item.id, item.status)}
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
