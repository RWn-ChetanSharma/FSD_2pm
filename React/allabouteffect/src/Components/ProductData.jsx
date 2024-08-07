import React, { useEffect, useState } from "react";

function ProductData() {
  // useState

  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState("");

  // useEffect

  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect is running");

      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${userId}`
        );

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching data!");
      }
    };

    fetchData();

    return(()=>{
    console.log("Clean up function is called !");
        
    })
  }, [userId]);

  return (
    <>
      <div className="container py-5 border border-5 border-danger-subtle text-bg-dark text-center">
        <h1>Product Data </h1>

        {/* Method 1  */}

        {userData ? (
          <div className="border border-3 border-primary-subtle my-4 py-3">
            <h2>Title : {userData.title.slice(0,40)}</h2>
            <h2>Description : {userData.description.slice(0,80)}</h2>
            <h2>price : {userData.price}</h2>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {/* Method 2 */}

        {/* {userData && (
          <div className="border border-3 border-primary-subtle my-4 py-3">
            <h2>Tilte : {userData.title}</h2>
            <h2>Description : {userData.description}</h2>
            <h2>price : {userData.price}</h2>
          </div>
        )} */}

        {/* Button Decrement */}

        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={() => setUserId(userId - 1)}
        >
          Decrement
        </button>

        {/* Button Increment */}

        <button
          type="button"
          className="btn btn-success ms-3"
          onClick={() => setUserId(userId + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default ProductData;
