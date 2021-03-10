import React from 'react';
import { SidebarContext } from './sidebarContext';

const ButtonSidebar = ({ children, ...props }) => {
  const sidebar = React.useContext(SidebarContext);

  function handleClick(event) {
    event.preventDefault();
    sidebar.setSidebarstatus((sidebarstatus) => !sidebarstatus);
    sidebar.setType(event.target.id);
    console.log(event.target.id)
    sidebar.setTitle(event.target.value);
  }

  return (
    <>
      <button onClick={(e) => handleClick(e)} {...props}>
        {' '}
        {children}{' '}
      </button>
    </>
  );
};

export default ButtonSidebar;
