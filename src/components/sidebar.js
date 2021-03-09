import React from 'react';
import ButtonSidebar from './buttonsidebar';
import ListOrders from './listallorders';

const Sidebar = ({ filterType, title }) => (
  <section className="open">
    <div className="overlay-dark"></div>
    <div className={'sidebar'}>
      <div>
        <section>
          <ButtonSidebar
            id={'null'}
            key={'button-close'}
            className="close-button"
          >
            <span className="material-icons">highlight_off</span>
          </ButtonSidebar>
        </section>
      </div>
      <div className={'sidebar-container'}>
        <div>
          <h2 className="title-sidebar">{title}</h2>
          <section>
            <ListOrders filterType={filterType} />
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default Sidebar;
