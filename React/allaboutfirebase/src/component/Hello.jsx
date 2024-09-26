import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

function Hello() {
  const db = getDatabase(app);

  const sendData = () => {
    set(ref(db, "user/chetan"), {
      id: 1,
      name: "chetan",
      email: "chetan@gmail.com",
    }).then(() => console.log("Data Added successfully"));
  };
  return (
    <>
    <div className="container text-bg-dark p-5 text-center">
      <h1>Firebase RealTime Database</h1>
      <button className="btn btn-success" onClick={sendData}>
        Send Data
      </button>
    </div>
    </>
  );
}

export default Hello;
