import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [inpData, setInpData] = useState({ name: "", email: "" });
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4040/users", inpData)
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
    }
    

      if (redirect) {
        navigate("/");
      }
 

  return (
    <>
      <div className="container text-bg-dark p-5">
        <h1 className="text-center">Add User Detail</h1>
        <form onSubmit={handleSubmit}>
          <div className="col">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Enter User Name"
              onChange={(e) => setInpData({ ...inpData, name: e.target.value })}
            />
          </div>
          <div className="col">
            <label htmlFor="email">User email</label>
            <input
              type="email"
              className="form-control my-3"
              placeholder="Enter User Email"
              onChange={(e) =>
                setInpData({ ...inpData, email: e.target.value })
              }
            />
          </div>
          <div className="col">
            <button className="btn btn-success my-3">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
