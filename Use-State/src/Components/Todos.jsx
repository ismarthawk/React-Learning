import React from 'react';
import { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    console.log(text);
    setTodos([{ id: todos.length, text: text }, ...todos]);
    setText('');
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>

      <h3>Tasks</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
