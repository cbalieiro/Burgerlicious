import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../img/logo.gif';

const Header = ({ role, name }) => {
  const history = useHistory();

  return (
    <header>
      <section>
        <div>{role}:</div>
        <div>{name}</div>
        <button className="orders-button" onClick={() => {
          history.push("/")
          localStorage.clear()
        }
        }>
          <span className="material-icons">
            logout
        </span>
        </button>
      </section>

      <img src={logo} alt="logo" height="165px" width="164px" />

      <section className="buttons">
        <button className="orders-button">
        <span className="material-icons">
            notifications
          </span>
        </button>
        <button className="orders-button">
          <span className="material-icons">
            history
          </span>
        </button>
      </section>
    </header>
  )
}

export default Header;
