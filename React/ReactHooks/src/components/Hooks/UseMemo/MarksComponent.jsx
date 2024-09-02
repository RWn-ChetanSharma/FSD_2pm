import React from "react";

function MarksComponent({ marks }) {
  console.log("Inside MarksComponent");

  return (
    <>
      <h2>Marks : {marks}</h2>
    </>
  );
}

export default React.memo(MarksComponent);
