import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('anonymous');
  const [age, setAge] = useState(30);

  const handleTextChange = (e) => {
    setName(e.target.value);
    setAge(40);
  };

  const handleAgeButton = () => {
    setAge((prev) => prev + 1);
  };

  return (
    <>
      {/* <p>This is the form</p> */}
      <input type="text" value={name} onChange={handleTextChange} />
      <p>
        Hi, {name} Your age is {age}
      </p>
      <button onClick={handleAgeButton}>Increment Age</button>
    </>
  );
}
