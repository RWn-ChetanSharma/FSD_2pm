import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, multipleBy } from "../counter/counterSlice";

function CounterCard() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>CounterCard = {count}</h1>
      <button className="btn btn-primary me-3" onClick={() => dispatch(incrementByAmount(5))}>By 5</button>
      <button className="btn btn-primary ms-3" onClick={() => dispatch(multipleBy())}>By 2</button>
    </>
  );
}

export default CounterCard;
