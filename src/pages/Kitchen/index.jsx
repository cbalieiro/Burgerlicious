import React from 'react';
import RequestOptions from '../../components/object/requestOptions';
import useFetch from '../../services/Hooks/useFetch';
import CardsKitchen from '../../components/cardsKitchen';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Kitchen = () => {
  const { data, error, loading, request } = useFetch();
  const nameLS = JSON.parse(localStorage.getItem('currentUser'));
  const { name, role, token } = nameLS;

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
    if (role === 'kitchen') {
      if (data) {
        const orderList = data.filter(({ status }) => status !== 'done');
        return (
          <>
            <Header role={role} name={name} />
            <section>
              {orderList
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map(
                  ({ id, client_name, table, status, createdAt, Products }) => {
                    const productList = Products.map((item) => item);
                    return (
                      <CardsKitchen
                        key={id}
                        id={id}
                        clientName={client_name}
                        table={table}
                        status={status}
                        date={createdAt}
                        product={productList}
                      />
                    );
                  },
                )}
            </section>
            <Footer />
          </>
        );
      } else return null;
    } else {
      return alert('Você não possui acesso a esse Módulo');
    }
  }

  return result();
};

export default Kitchen;
