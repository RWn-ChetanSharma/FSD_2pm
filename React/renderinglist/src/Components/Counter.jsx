import React from 'react'

function Counter() {

    let a = 0;
    function handleEvent() {
        console.log("Hello");
        a++;
        console.log(a);

    }
  return (
    <>
        <button onClick={handleEvent} className='btn btn-primary'>Click me</button>
    </>
  )
}

export default Counter