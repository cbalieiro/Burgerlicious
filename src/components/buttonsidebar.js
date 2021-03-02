import React from 'react';
import { SidebarContext } from './sidebarContext';

const ButtonSidebar = ({ children, ...props }) => {
  const sidebar = React.useContext(SidebarContext);
  
  function handleClick(event) { 
    event.preventDefault();
    sidebar.setSidebarstatus((sidebarstatus)=> !sidebarstatus);
  }

  return (
    <>
      <button onClick={handleClick} {...props}>
      {' '}
      {children}{' '}
    </button>
    </>
  );
};

export default ButtonSidebar;
