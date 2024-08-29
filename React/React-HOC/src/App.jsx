import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import SourceCounter from "./components/ClickCounter";

function App() {
  return (
    <>
      <div className="container text-bg-dark text-center p-5">
        <h1>React HOC - Higher Order Component</h1>
        <div className="row pt-3">
          <div className="col">
            {/* <ClickCounter /> */}
            <SourceCounter/>
          </div>
          <div className="col">
            <HoverCounter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
