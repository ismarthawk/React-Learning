import React from 'react';
import { useState } from 'react';

export default function Greet({ name }) {
  const [userName, setUserName] = useState('Ananymous User');
  const changeName = () => {
    setUserName(name);
  };

  return (
    <>
      <h1 onClick={changeName}>Hello {userName}</h1>
    </>
  );
}
