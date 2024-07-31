import React, { useState } from "react";

function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handleLastName(e) {
        setLastName(e.target.value)
    }

  return (
    <>
      <div className="container  py-5 text-bg-dark my-3">
        <h1 className="text-center">My Form</h1>
        {/* BootStrap Form  */}

        {/* <form onSubmit={(e) => e.preventDefault()}> */}
          <div className="mb-3">
            <label  className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={handleFirstName}
            />
           
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={handleLastName}
            />
          </div>
         
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        {/* </form> */}

        <div className="text-bg-success border border-4 border-primary-subtle my-5 py-4 fs-3">
                User Name is {firstName} {lastName}
        </div>
      </div>
    </>
  );
}

export default Form;
