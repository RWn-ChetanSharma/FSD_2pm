import React, { useEffect, useState } from 'react'

function Mycounter() {

    const [count, setCount] = useState(0);

    // console.log("Component Mount");

    useEffect(() => {
        // Call to be Excecuted 
        console.log("The count is : ", count);
        
        console.log("Component update");
        

        // Optional return something

        return(()=> {
            console.log("Cleaned up");
            // console.log("Component UnMount");
        }
        )
    }, [count]) // Dependency Array
  return (
    <>
        <div className="container text-center text-bg-dark p-4 mt-5 border border-4 border-success-subtle">
            <h1>Count = {count}</h1>
            <button className='btn btn-primary me-2' onClick={() => setCount(count - 1)}>Decrement</button>
            <button className='btn btn-primary ms-2' onClick={() => setCount(count + 1)}>Increment</button>
        </div>

    
    </>
  )
}

export default Mycounter