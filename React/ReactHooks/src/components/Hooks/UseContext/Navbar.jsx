import React, { useContext } from 'react'
import counterContext from '../../../context/context'

function Navbar() {

  const value = useContext(counterContext)
  return (
    <>
        <div className="d-flex justify-content-around text-bg-dark">
                <h3>Logo</h3>
                <h3>Count :- {value.count}</h3>
        </div>
    </>
  )
}

export default Navbar