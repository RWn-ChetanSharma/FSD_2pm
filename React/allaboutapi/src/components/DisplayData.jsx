import React from "react";
import Data from "../data.json";

function DisplayData() {
  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
        {Data && Data.map((ele) => {
          return (
            <div className="col border border-3 py-4 my-5" key={ele.id}>
              <h2>{ele.name}</h2>
              <h2>{ele.email}</h2>
              {ele.course && ele.course.map((e, index) => {
            //   {ele.course.map((e) => {
                // return <i key={ele.id}>{e.tech}</i>;
                return <i key={index}>{e.tech}</i>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DisplayData;
