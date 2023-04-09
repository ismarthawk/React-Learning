import React from 'react';
import { useState } from 'react';

export default function CountLable({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if (prevCount !== count) {
    if (prevCount > count) setTrend('Decreasing');
    else setTrend('Increasing');
    setPrevCount(count);
  }

  return (
    <>
      <h1>{count}</h1>
      {trend && <p>value is {trend}</p>}
    </>
  );
}
