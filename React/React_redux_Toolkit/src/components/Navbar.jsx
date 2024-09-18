import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../counter/counterSlice'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <>
        <div className='d-flex justify-content-around text-bg-danger fs-3 py-3'>
            <div className='d-flex justify-content-around list-unstyled gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Team</li>
            </div>
            <h2>Count = {count}</h2>
            <button className='btn btn-info' onClick={() => dispatch(increment())}>+</button>
        </div>
    </>
  )
}

export default Navbar