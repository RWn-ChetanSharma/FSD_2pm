import React, { useCallback, useEffect, useState } from 'react'
import ButtonCounter from './ButtonCounter'

function CounterCallback() {

    const [count , setCount] = useState(0)


    const increment = useCallback(() =>{
        setCount(prevCount => prevCount + 1)
    }, [])

    useEffect(() => {
      console.log("Inside useEffect");
      
    }, [increment])
    

  return (
    <>
        <div className="container text-bg-dark p-5 text-center">
        <h1>Count : {count}</h1>
        <ButtonCounter increment={increment}/>
        </div>


    </>
  )
}

export default CounterCallback