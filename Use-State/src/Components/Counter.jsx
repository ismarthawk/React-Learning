import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Button clicked {count} times</button>
    </>
  );
}
