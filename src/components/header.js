import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../img/logo.gif';

const Header = ({ role, name }) => {
  const history = useHistory();

  return (
    <header>
      <section>
        <div className="user-info">
          <span className="team-work">{role.toUpperCase()}:</span> {name.toUpperCase()}
          </div>
        <button className="orders-button" onClick={() => {
          history.push("/")
          localStorage.clear()
        }
        }>
          <span className="material-icons">
            logout
        </span>
        LOGOUT
        </button>
      </section>

      <img src={logo} alt="logo" height="165px" width="164px" />

      <section className="buttons">
        <button className="orders-button" onClick={() => {console.log('fazer mudar os componentes da tela')}}>
        <span className="material-icons">
            notifications
          </span>
          ORDERS IN PROGRESS
        </button>
        <button className="orders-button" onClick={() => {console.log('fazer mudar os componentes da tela')}}>
          <span className="material-icons">
            history
          </span>
          FINISHED ORDERS
        </button>
      </section>
    </header>
  )
}

export default Header;
