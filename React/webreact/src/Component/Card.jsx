import React from "react";
import logo from '../Assets/leaf.avif'
function Card() {
  return (
    <>
      {/* Card */}
      <div className="card" style={{width: '18rem'}}>
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
