import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignup() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "chetan@gmail.com",
      "chetan@12345"
    ).then(() => alert("User Signup Successfully"));
  };

  return (
    <>
      <div className="container text-bg-dark p-4 my-4">
        <div className="col">
          <label>User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email Here"
            className="form-control my-3"
          />
        </div>
        <div className="col">
          <label>User Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password Here"
            className="form-control my-3"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={signupUser}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
