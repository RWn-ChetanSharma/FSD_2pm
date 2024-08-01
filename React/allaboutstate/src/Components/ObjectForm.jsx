import React, { useState } from "react";

function ObjectForm() {
  const [detail, newDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

//  You can use the ... object spread syntax so that you don’t need 
//  to copy every property separately.

  function handleNameChange(e) {
    newDetail({
      ...detail,
      name: e.target.value,
    });
  }
  function handleEmailChange(e) {
    newDetail({
      ...detail,
      email: e.target.value,
    });
  }
  function handleMessageChange(e) {
    newDetail({
      ...detail,
      message: e.target.value,
    });
  }
  return (
    <>
        <h1 className="text-center my-5 text-bg-danger ">Object Form</h1> 

      <div className="container text-bg-dark p-4 border rounded-5 border-success-subtle border-5 ">
        <form onSubmit={(e) => e.preventDefault()}> 
          {/* <!-- Name input --> */}
          <div className="form-outline mb-4">
            <input
              value={detail.name}
              type="text"
              className="form-control"
              onChange={handleNameChange}
            />
            <label className="form-label">Name</label>
          </div>

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input
              value={detail.email}
              type="email"
              className="form-control"
              onChange={handleEmailChange}
            />
            <label className="form-label">Email address</label>
          </div>

          {/* <!-- Message input --> */}
          <div className="form-outline mb-4">
            <textarea
              value={detail.message}
              className="form-control"
              rows="4"
              onChange={handleMessageChange}
            ></textarea>
            <label className="form-label">Message</label>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" className="btn btn-primary btn-block mb-4">
            Send
          </button>
        </form>

        <div className="preview border border-5 p-4 text-bg-success text-warning">
          <h1 className="my-3">Preview :</h1>
          <h2 >Hello {detail.name}</h2>
          <h2>Your Email ID is : {detail.email}</h2>
          <h2>
            Your Message is <q>{detail.message}</q>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ObjectForm;