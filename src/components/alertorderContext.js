import React, { Children } from 'react';
import ToastAlert from './toastalert';

const AlertContext = React.createContext(null);

export const AlertStorage = ( {Children}) => {
  const [alertstatus, setAlertstatus] = React.useState(false);
  const [message, setMessage] = React.useState('You Have a New Order!!!');

  return (
    <AlertContext.Provider value={{setAlertstatus, message, setMessage }}>
      {Children}
      {alertstatus && (<ToastAlert message={message} show={alertstatus} close={setAlertstatus} />)}
    </AlertContext.Provider>
  );
};

export function useAlertStatus() {
  const context = React.useContext(AlertContext);
  const { alertstatus, setAlertstatus, message, setMessage  } = context;
  return { alertstatus, setAlertstatus, message, setMessage };
}
