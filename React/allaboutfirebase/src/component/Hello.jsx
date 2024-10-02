import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

function Hello() {
  const db = getDatabase(app);

  const [inpData1, setInpData1] = useState("");
  const [inpData2, setInpData2] = useState("");

  const sendData = () => {
    set(ref(db, "user/chetan"), {
      firstName: inpData1,
      lastName: inpData2,
    })
      .then(() => console.log("Data Added successfully"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
        <h1>Firebase RealTime Database</h1>

        <input
          type="text"
          value={inpData1}
          onChange={(e) => setInpData1(e.target.value)}
        />
        <input
          type="text"
          value={inpData2}
          onChange={(e) => setInpData2(e.target.value)}
        />
        <button className="btn btn-success" onClick={sendData}>
          Send Data
        </button>
      </div>
    </>
  );
}

export default Hello;
