import React from 'react';
import Greet from './Components/Greet';
import Counter from './Components/Counter';
import Text from './Components/Text';
import CheckBox from './Components/CheckBox';
import Form from './Components/Form';
import BigForm from './Components/BigForm';
import Todos from './Components/Todos';
import CountLabel from './Components/CountLabel';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>Hello World !</h1> */}
      {/* <Greet name="Damodar" /> */}
      <Counter />
      <Text />
      <CheckBox />
      <Form />

      <h1>Big Form</h1>
      <BigForm />

      <h1>Todo </h1>
      <Todos />

      <h1>Prev State getting from parent class</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
      <CountLabel count={count} />
    </div>
  );
}

export default App;
