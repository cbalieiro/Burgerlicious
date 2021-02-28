import React, { useState } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Menu from "../../components/menu";

const Hall = () => {

  const nameLS = JSON.parse(localStorage.getItem('currentUser'));

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