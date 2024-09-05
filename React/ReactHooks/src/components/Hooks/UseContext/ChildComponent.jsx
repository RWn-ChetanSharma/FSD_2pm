import React, { useContext } from 'react'
import counterContext from '../../../context/context'

function ChildComponent() {

  const value = useContext(counterContext)

  return (
    <>
        <h2>Child Component Count :- {value.count}</h2>
        <button className='btn btn-danger' onClick={() => value.setCount(value.count + 5)}>+5</button>
    </>
  )
}

export default ChildComponent