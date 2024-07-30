import React, { useState } from "react";

function Counter() {
  // const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0);

  function increment() {
      console.log(count);
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
    console.log(count);

  }
  return (
    <>
      <div className="container text-center">
        <h1 className="text-center">Counter</h1>
        <button type="button" className="btn btn-primary" onClick={decrement}>
          Decrement
        </button>

        <button type="button" className="btn btn-secondary mx-5">
          {count}
        </button>

        <button type="button" className="btn btn-success" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
