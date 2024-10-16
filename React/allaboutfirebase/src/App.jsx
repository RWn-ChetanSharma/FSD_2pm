import React, { useEffect, useState } from "react";
import UserSignup from "./component/UserSignup";
import UserSignIn from "./component/UserSignIn";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Hello from "./component/Hello";

const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // user is signin
      } else {
        console.log("User Logout");
        setUser(null);
        
        // user is signout
      }
    });
  }, []);

  // if (user === null) {
  //   return (
  //     <>
  //       <div className="container text-bg-info p-5">
  //         <UserSignup />
  //         <UserSignIn />
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      {/* <div className="container text-bg-dark p-5 text-center">
        <h1>Google Auth Provider</h1>
        <h2>Namaste {user.email}</h2>
        <button className="btn btn-danger" onClick={() => signOut(auth)}>Logout</button>
      </div> */}


      <div>
        <Hello/>
      </div>
    </>
  );
}

export default App;
