import React from 'react';
import { SidebarContext } from './sidebarContext';

const ButtonSidebar = ({ children, ...props }) => {
  const sidebar = React.useContext(SidebarContext);

  function handleClick(event) {
    event.preventDefault();
    sidebar.setType(event.target.id);
    console.log(event.target.id)
    sidebar.setTitle(event.target.value);
    sidebar.setSidebarstatus((sidebarstatus) => !sidebarstatus);
  }

  return (
    <>
      <button {...props} onClick={(e) => handleClick(e)}>
        {' '}
        {children}{' '}
      </button>
    </>
  );
};

export default ButtonSidebar;
