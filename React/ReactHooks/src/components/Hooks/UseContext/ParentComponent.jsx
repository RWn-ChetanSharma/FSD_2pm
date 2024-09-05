import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
  return (
    <>
    
        <div className='container text-bg-success text-center p-4'>
            <h2>Parent Component</h2>
            <ChildComponent/>
        </div>
    
    </>
  )
}

export default ParentComponent