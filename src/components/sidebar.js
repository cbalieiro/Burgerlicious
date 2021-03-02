import React from 'react';
import ButtonSidebar from './buttonsidebar';
import ListOrders from './listallorders'

const Sidebar = () => (
  <>
    <div className={'sidebar'}>
      <div>
        <section>
          <ButtonSidebar key={'button-close'} className="orders-button">
            <span className="material-icons">highlight_off</span>
          </ButtonSidebar>
        </section>
      </div>
      <div><h1></h1></div>
      <ListOrders />
    </div>
  </>
);

export default Sidebar;
