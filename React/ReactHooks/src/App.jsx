import React, { useState } from "react";
import FormState from "./components/Hooks/UseState/FormState";
import FormReducer from "./components/Hooks/UseReducer/FormReducer";


function App() {
  // const [count, setCount] = useState(initialValue);
  // const [count, setCount] = useState(1);
  return (
    <>
        {/* Use Reducer */}

        <FormReducer/>



      {/* useContext  */}

      {/* <counterContext.Provider value={{count, setCount}}>
        <Navbar />
        <ParentComponent  />
        <div className="container text-bg-danger text-center p-3">
          <div className="h1">Count : {count}</div>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </counterContext.Provider> */}

      {/* useCallback */}

      {/* <CounterCallback/> */}

      {/* useMemo  */}

      {/* <div className="container text-bg-danger p-4 text-center">
        <NameComponent name={"Tanvi"} />
        <MarksComponent marks={90} />
      
      </div>
      <div className="container text-bg-dark p-5 text-center">
          <StudentsResult name={"Rohan"} subject={"Hindi"} marks={80}/>
      </div> */}




      {/* UseState  */}


      <FormState/>
    </>
  );
}

export default App;
