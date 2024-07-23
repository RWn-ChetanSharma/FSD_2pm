import React from "react";

function MyProps({country, capital}) {
    // function MyProps(props) {
    //     console.log(props);
    //     const hey1 = props.country
    //     const hey2 = props.capital
  return (
    <>
    <div className="container border-4 border border-danger-subtle bg-danger-subtle my-4">
      {/* <h1>Hello {props.country}</h1>
      <p>Capital of {props.country} is {props.capital}</p> */}
      {/* <h1>Hello {capital}</h1>
      <p>Capital of {capital} is {hey2}</p> */}
      <h1>Hello {country}</h1>
      <p>Capital of {country} is {capital}</p>
    </div>
    </>
  );
}

export default MyProps;

// Props

// Props is a special keyword in React that stands for properties and is used for 
// passing data from one component to another. Data with props are passed in a 
// unidirectional flow from parent to child.



// DRY => Do Not Repeat Yourself