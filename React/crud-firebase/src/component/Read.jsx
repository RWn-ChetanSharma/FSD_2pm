import { child, get, getDatabase, ref } from "firebase/database";
import React, { useState } from "react";
import app from "../firebase";

function Read() {
  const [userArray, setUserArray] = useState([]);

  const dispData = async () => {
    const dbRef =  ref(getDatabase(app));
    await get(child(dbRef, `details/users`)).then((snapshot) => {
      if (snapshot.exists()) {
        setUserArray(Object.values(snapshot.val()))
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <div className="container">
        <h1>Read Data</h1>
        <button className="btn btn-primary" onClick={dispData}>
          Display Data
        </button>
        <ul>
          {userArray.map((e, i) => {
            return (
              <li key={i}>
                {e.firstName} {e.lastName}
                <button className="btn btn-success" >Edit</button>
                <button className="btn btn-danger">Delete</button>
              </li>

            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Read;
