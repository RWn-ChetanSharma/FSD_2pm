import React from "react";
import HocCounter from "./HocCounter";

function ClickCounter(props) {
  const { count, incrementCount } = props;

  return (
    <>
      <div className="container">
        <button className="btn btn-primary" onClick={incrementCount}>
          Click Me
        </button>
        <h1>Count : {count}</h1>
      </div>
    </>
  );
}

const SourceCounter = HocCounter(ClickCounter);

export default SourceCounter;
