import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import app from "../firebase";
import { useNavigate } from "react-router-dom";

function WriteData() {
  const navigate = useNavigate();

  const [inpData1, setInpData1] = useState("");
  const [inpData2, setInpData2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'details/users');
    const newDbRef = push(dbRef);
    set(newDbRef, {
        
      firstName: inpData1,
      lastName: inpData2,
    })
      .then(() => {
        alert("Data Saved Successfully");
        navigate("/read");
      })
      .catch(() => alert("errrrroooooorrrrrrr!"));
  };

  return (
    <>
      <div className="container text-bg-dark p-5">
        <h1>Write Data Here</h1>

        <div className="col">
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter First Name"
            value={inpData1}
            onChange={(e) => setInpData1(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter Last Name"
            value={inpData2}
            onChange={(e) => setInpData2(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={saveData}>
            Save Data
          </button>
        </div>
      </div>
    </>
  );
}

export default WriteData;
