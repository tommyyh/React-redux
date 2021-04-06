import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from './actions/counter';

function App() {
  const counter = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
