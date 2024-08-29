import React from 'react'
import HocCounter from './HocCounter';

function HoverCounter(props) {
    const { count, incrementCount } = props;

  return (
    <>
        <div className="container">
        <button className="btn btn-primary" onMouseOver={incrementCount}>
          Hover Me
        </button>
        <h1>Count : {count}</h1>
      </div>
    </>
  )
}

export default HocCounter(HoverCounter, 10)