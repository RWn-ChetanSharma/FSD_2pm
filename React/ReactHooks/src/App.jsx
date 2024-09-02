import React from "react";
import NameComponent from "./components/Hooks/UseMemo/NameComponent";
import MarksComponent from "./components/Hooks/UseMemo/MarksComponent";
import StudentsResult from "./components/Hooks/UseMemo/StudentsResult";

function App() {
  return (
    <>
      <div className="container text-bg-danger p-4 text-center">
        <NameComponent name={"Tanvi"} />
        <MarksComponent marks={90} />
      </div>
      <div className="container text-bg-dark p-5 text-center">
          <StudentsResult name={"Rohan"} subject={"Hindi"} marks={80}/>
      </div>
    </>
  );
}

export default App;
