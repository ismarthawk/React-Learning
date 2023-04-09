import React from 'react';
import { useState } from 'react';

export default function Text() {
  const [text, setText] = useState('Default Text');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input value={text} type="text" onChange={handleChange} />
      <p>The text is {text}</p>
      <button onClick={() => setText('Default Text')}>Rest</button>
    </>
  );
}
