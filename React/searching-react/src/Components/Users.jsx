import React, { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);
  const [term, setTerm] = useState("");

  //   Api Calling

  useEffect(() => {
    async function fetchData() {
      const fetchApi = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(fetchApi);
      const data = await fetchApi.json();
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);

  //   render users

//   const renderUser = user.map((e) => (
//     <div key={e.id}>
//       <p>
//         <strong>{e.name}</strong>
//       </p>
//     </div>
//   ));

  //   Searching

  const searchingUser = user.filter(({ username }) => {
      return username.indexOf(term) >= 0;
    })
    .map((e) => (
      <div key={e.id}>
        <p>
          <strong>{e.username}</strong>
        </p>
      </div>
    ));

  return (
    <>
      <div className="container text-bg-danger text-center p-5">
        <h1>Users</h1>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}/>
        {searchingUser}
        {/* {renderUser} */}
      </div>
    </>
  );
}

export default Users;
