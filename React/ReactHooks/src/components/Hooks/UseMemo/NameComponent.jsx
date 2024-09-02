import React from "react";

function NameComponent({ name }) {
  console.log("Inside NameComponent");

  return (
    <>
      <h2>Name : {name}</h2>
    </>
  );
}

export default React.memo(NameComponent);
