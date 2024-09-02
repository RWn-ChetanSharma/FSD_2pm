import React, {useMemo} from "react";

function StudentsResult({ name, marks, subject }) {
    console.log("Inside StudentsResult");
    
  const percentage = useMemo( () => {
        return (marks * 100) / 100;
      }, [marks]
  );

  return (
    <>
      <h2>Name : {name}</h2>
      <h2>Marks : {marks}</h2>
      <h2>Percentage : {percentage} %</h2>
      <h2>Subject : {subject}</h2>
    </>
  );
}

export default StudentsResult;

// Memoization is a technique used in computing to speed up programs
// by storing and reusing the results of function calls. It's a type of
// caching that's used to avoid repeating calculations when the same inputs occur again



/* React.memo and useMemo are both tools in React that help improve app 
    performance by avoiding unnecessary calculations and re-renders:

// 1. React.memo

=> A higher-order component (HOC) that caches the output of a component and 
    returns it when the input props remain the same. This is useful for functional components that depend on their props.

// 2. useMemo

=> A React hook that caches the result of a function and returns it when the 
    inputs to that function have not changed. This is useful for memoizing specific values or calculations within a component, especially those with complex internal logic. 

// Here's some more information about each tool: -

// 1. React.memo

=> React internally compares old and new props, and only updates or re-renders 
    the component if they are different. 

// 2. useMemo

=> useMemo uses memoization, an internal caching mechanism that allows 
    functions to avoid re-computing expensive values when receiving the same inputs. 

*/