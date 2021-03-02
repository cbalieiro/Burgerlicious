import React from 'react';
import ButtonSidebar from './buttonsidebar';
import ListOrders from './listallorders';

const Sidebar = ({ filterType, title }) => (
  <>
    <div className={'sidebar'}>
      <div>
        <section>
          <ButtonSidebar
            id={'null'}
            key={'button-close'}
            className="orders-button"
          >
            <span className="material-icons">highlight_off</span>
          </ButtonSidebar>
        </section>
      </div>
      <div className={'sidebar-container'}>
        <div>
          <h2>{title}</h2>
          <section>
            <ListOrders filterType={filterType} />
          </section>
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
