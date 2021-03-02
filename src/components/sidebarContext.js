import React from 'react';
import Sidebar from './sidebar';

export const SidebarContext = React.createContext();

export const SidebarStorage = ({ children }) => {
  const [sidebarstatus, setSidebarstatus] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarstatus, setSidebarstatus }}>
      { sidebarstatus && <Sidebar />}
      {children}
    </SidebarContext.Provider>
  );
};
