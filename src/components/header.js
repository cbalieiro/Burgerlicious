import React from 'react';
import Checkbox from './checkbox';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo.gif';
import Sidebar from './sidebar';

const Header = ({ role, name }) => {
  const history = useHistory();
  const [checkStatus, setCheckStatus] = React.useState(false);

  function handleClick() {
    setCheckStatus(!checkStatus);
  }
  console.log(checkStatus);

  return (
    <>
    {checkStatus && <Sidebar />}
    <header>
      <section>
        <div className="user-info">
          <span className="team-work">{role.toUpperCase()}:</span>{' '}
          {name.toUpperCase()}
        </div>
        <button
          className="orders-button"
          onClick={() => {
            history.push('/');
            localStorage.clear();
          }}
        >
          <span className="material-icons">logout</span>
          LOGOUT
        </button>
      </section>

      <img src={logo} alt="logo" height="165px" width="164px" />

      <section className="buttons">
        {/* <div className="orders-button">
        <label htmlFor="notifications">
          <Checkbox
            id="notifications"
            checkStatus={checkStatus}
            onChange={(event) => {
              handleCheckbox(event);
            }}
          />
          <span className="material-icons">notifications</span>
        </label>
        </div>

        <div className="orders-button">
        <label htmlFor="history">
          <Checkbox
            id="history"
            checkStatus={checkStatus}
            onChange={(event) => {
              handleCheckbox(event);
            }}
          />
          <span className="material-icons">history</span>
          FINISHED ORDERS
        </label>
        </div> */}

        <button className="orders-button" onClick={handleClick}>
        <span className="material-icons">
            notifications
          </span>
          ORDERS IN PROGRESS
        </button>
        <button
          className="orders-button"
          onClick={() => {
            console.log('fazer mudar os componentes da tela');
          }}
        >
          <span className="material-icons">history</span>
          FINISHED ORDERS
        </button>

      </section>
    </header>
    
    </>
  );
};

export default Header;
