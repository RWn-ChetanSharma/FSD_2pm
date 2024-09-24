import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DispData() {
  const [col, setCol] = useState([])
  const [record, setRecord] = useState([])
const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => {
        console.log(res.data)
        setCol(Object.keys(res.data[0]))
        setRecord(res.data)
      })
      .catch((err) => console.log("Bad Request"));
  }, []);

  // handleDelete

  function handleDelete(id) {
    const askUser = confirm("You Really Wants to Delete This?");
    if (askUser) {
      axios.delete(`http://localhost:4040/users/${id}`)
      .then(res => {
        console.log(res.data.id);
        
        alert("Data Deleted!");
        navigate('/')
      })
      .catch(err => console.log(err)
      )
    }
    
  }
  
  return (
    <>
      <div className="container text-bg-success p-5 text-center">
        <div className="text-end"><Link to="/create" className="btn btn-primary">ADD</Link></div>
        <h1>User Data</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              {col.map((e, i) => (
                <th key={i}>{e}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((a,j)=> (
              <tr key={j}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>
                    <Link to={`/update/${a.id}`} className="btn btn-success me-2">Update</Link>
                    <button className="btn btn-danger ms-2" onClick={()=>handleDelete(a.id)}>Delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

}

export default DispData;



// Install Json server 

// npm install -g json-server@0.17.4  


// Watch Json Server 

// json-server --watch db.json --port 4040