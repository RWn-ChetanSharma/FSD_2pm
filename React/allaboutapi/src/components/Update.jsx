import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();

  const navigate = useNavigate()

  const [data, setData] = useState({ id: "", name: "", email: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setData({
          id: res.data.id,
          name: res.data.name || "",
          email: res.data.email || "",
        });
      })
      .catch((err) => console.log("Bad Request"));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:4040/users/${id}`, data)
      .then((res) => {
        console.log(res.data)
        navigate('/')

      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container text-bg-dark p-5">
        <h1 className="text-center">Update User Detail</h1>
        <form onSubmit={handleSubmit}>
          <div className="col">
            <label htmlFor="name">User ID</label>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Enter User Name"
              disabled
              value={data.id}
            />
          </div>
          <div className="col">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control my-3"
              placeholder="Enter User Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="col">
            <label htmlFor="email">User email</label>
            <input
              type="email"
              className="form-control my-3"
              placeholder="Enter User Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="col">
            <button className="btn btn-success my-3">Update</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
