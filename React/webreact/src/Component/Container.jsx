import React from "react";
import Card from "./Card";

function Container() {
  return (
    <>
      <div className="container my-4">
        <div className="row gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Container;
