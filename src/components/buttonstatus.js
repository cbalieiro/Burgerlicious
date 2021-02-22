import React from 'react';

const Button = ({ status, id }) => {
  console.log( status, id );
  const validation = status === 'pending';
  const [condition, setCondition] = React.useState(validation);

  function handleClick() {
    setCondition(!condition);
    console.log(condition);
  }

  return <button onClick={handleClick}>{condition ? 'Doing' : 'Done'}</button>;
};

export default Button;
