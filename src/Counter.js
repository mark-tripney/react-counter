import React, { useState } from 'react';

export function Counter() {
  // const [state, setState] = useState(defaultState);
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button className="Reset" onClick={() => setCount((count = 0))}>
        Reset
      </button>
    </div>
  );
}
