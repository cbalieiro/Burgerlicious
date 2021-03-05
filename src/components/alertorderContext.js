import React, { Children } from 'react';
import ToastAlert from './toastalert';

const AlertContext = React.createContext(null);

export const AlertStorage = ( {Children}) => {
  const [alertstatus, setAlertstatus] = React.useState(false);
  const [message, setMessage] = React.useState('You Have a New Order!!!');

  return (
    <AlertContext.Provider value={{ alertstatus, setAlertstatus, message, setMessage }}>
      {Children}
    </AlertContext.Provider>
  );
};

export function useAlertStatus() {
  const context = React.useContext(AlertContext);
  const { alertstatus, setAlertstatus, message, setMessage  } = context;
  return { alertstatus, setAlertstatus, message, setMessage };
}
