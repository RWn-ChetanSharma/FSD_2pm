import React, { useState } from "react";

const InitialValue = {
  fname: "",
  age: "",
  mobile: "",
  email: "",
};

function FormState() {
  //   const [fname, setFname] = useState("");
  //   const [age, setAge] = useState("");
  //   const [mobile, setMobile] = useState("");
  //   const [email, setEmail] = useState("");

  const [form, setForm] = useState(InitialValue);

  function handleFname(e) {
    setForm({...form,fname: e.target.value,});
    // setFname(e.target.value);
  }
  function handleAge(e) {
    setForm({ ...form, age: e.target.value });
    // setAge(e.target.value);
  }
  function handleMobile(e) {
    setForm({ ...form, mobile: e.target.value });
    // setMobile(e.target.value);
  }
  function handleEmail(e) {
    setForm({ ...form, email: e.target.value });
    // setEmail(e.target.value);
  }

  function handleSubmit() {
    console.log("Form Submitted", { form });
    // console.log("Form Submitted", {fname, age, mobile, email});
  }

  return (
    <>
      <div className="container p-5 text-bg-danger">
        <h1 className="text-center">Use State</h1>

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

export default FormState;
