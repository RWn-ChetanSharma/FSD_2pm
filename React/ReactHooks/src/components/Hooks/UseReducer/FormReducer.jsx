import React, { useReducer, useState } from "react";

const InitialValue = {
  fname: "",
  age: "",
  mobile: "",
  email: "",
};

function reducerFunction(prevState, nextState) {
    console.log("nextState = ", nextState);
    
    return {...prevState, ...nextState}
}

function FormReducer() {
  

  const [form, setForm] = useReducer(reducerFunction, InitialValue);

  function handleFname(e) {
    setForm({fname: e.target.value,});
  }
  function handleAge(e) {
    setForm({age: e.target.value });
  }
  function handleMobile(e) {
    setForm({mobile: e.target.value });
  }
  function handleEmail(e) {
    setForm({email: e.target.value });
  }

  function handleSubmit() {
    console.log("Form Submitted", { form });
  }

  return (
    <>
      <div className="container p-5 text-bg-dark mb-5">
        <h1 className="text-center">Use Reducer</h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="form-control my-4"
          value={form.fname}
          onInput={handleFname}
        />

        <input
          type="number"
          placeholder="Enter Age"
          className="form-control my-4"
          value={form.age}
          onInput={handleAge}
        />

        <input
          type="tel"
          placeholder="Enter Mobile"
          className="form-control my-4"
          value={form.mobile}
          onInput={handleMobile}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control my-4"
          value={form.email}
          onInput={handleEmail}
        />

        <button className="btn btn-primary my-4" onClick={handleSubmit}>
          Sumbit
        </button>
      </div>
    </>
  );
}

export default FormReducer;



// The useReducer Hook is similar to the useState Hook. 
// It allows for custom state logic. If you find yourself 
// keeping track of multiple pieces of state that rely on 
// complex logic, useReducer may be useful.