import React, { useState } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Menu from "../../components/menu";

const Hall = () => {

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));

  const newOrder = {
      client: "",
      table: "",
      products: []
  }

  const [totalToPay, setTotal] = useState(0)
  const [order, setOrder] = useState(newOrder)

  return (
    <>
      <Header
        role={'Attendant'}
        name={nameLS.name}
      />

      <main className="home">
        <section className="menu-details">
          <Menu />
        </section>

        <section className="order-summary">
          <section className="section-order-summary">
            <label>
              Client:
            <input type="text" placeholder="Client name" value={order.client} onChange={(event) => { setOrder({ ...order, client: event.target.value }) }}/>
            </label>

            <label>
              Table:
            <input type="number" placeholder="Table number" value={order.table} onChange={(event) => { setOrder({ ...order, table: event.target.value }) }} />
            </label>
          </section>

          <section className="section-order-summary">
            <p>TOTAL: ${totalToPay}</p>
            <button onClick={console.log('limpar toda a tela')}>CANCEL</button>
            <button onClick={console.log(order)}>SEND</button>
          </section>
        </section>
      </main>
    
      {/* <Footer /> */}
    </>
  )
};

export default Hall;


/*
PAI
const SearchableList = ({ list }) => (
  <div>
    <Search>Search List:</Search>
    <List list={list} />
  </div>

FILHOS
const Search = ({ children }) => {
  const [query, setQuery] = React.useState('');
 
  const handleQuery = event => {
    setQuery(event.target.value);
  };
 
  return (
    <div>
      {children}
      <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
};

*******

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
*/

/*

const Search = ({ query, handleQuery, children }) => ( // query e handle são passados agora como parâmetro
  <div>
    {children}
    <input type="text" value={query} onChange={handleQuery} />
  </div>
);

const SearchableList = ({ list }) => { //o estado tá sendo criado no pai e ele fica responsável por cuidar do estado do filho
  const [query, setQuery] = React.useState('');
 
  const handleQuery = event => {
    setQuery(event.target.value);
  };
 
  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={list} />
    </div>
  );
};

*/