import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo.gif';
import ButtonSidebar from './buttonsidebar';
import { SidebarStorage } from './sidebarContext';

const Header = ({ role, name }) => {
  const history = useHistory();

  return (
    <>
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
          <SidebarStorage>
            <ButtonSidebar
              value={'ORDERS IN PROGRESS'}
              id={'processing'}
              key={'button-orderInprocess'}
              className="orders-button"
            >
              <span className="material-icons">notifications</span>
              ORDERS IN PROGRESS
            </ButtonSidebar>
          </SidebarStorage>

          <SidebarStorage>
            <ButtonSidebar
              value={'FINISHED ORDERS'}
              id={'finished'}
              key={'button-orderFinished'}
              className="orders-button"
            >
              <span className="material-icons">history</span>
              FINISHED ORDERS
            </ButtonSidebar>
          </SidebarStorage>
        </section>
      </header>
    </>
  );
};

export default Header;
