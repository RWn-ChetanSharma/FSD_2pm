import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("User Signup Successfully")
    );
  };

  const signInWithGoogle = () =>{
    signInWithPopup(auth, googleProvider)
  }
  return (
    <>
      <div className="container text-bg-dark p-4 my-4">
        <h1 className="text-center">Sign Up</h1>
        <div className="col">
          <label>User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email Here"
            className="form-control my-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label>User Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password Here"
            className="form-control my-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary me-3" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
          <button className="btn btn-primary ms-3" onClick={signupUser}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
