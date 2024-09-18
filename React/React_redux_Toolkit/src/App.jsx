import React from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";
import Card from "./components/Card";

function App() {
  const count = useSelector((state) => state.counter.value);
  // const count = useSelector();
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <div className="container p-5 text-center text-bg-dark">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <h1>Count = {count}</h1>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="container text-bg-success p-5">
        <Card />
      </div>
    </>
  );
}

export default App;
