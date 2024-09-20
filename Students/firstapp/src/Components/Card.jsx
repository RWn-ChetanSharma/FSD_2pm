import React from "react";

function Card({Cardimg,title,description,price}) {


  return (
    <>
      <div className="container d-flex gap-3 mt-4">
        <div className="card w-25">
          <img
            src={Cardimg}
            className="card-img-top "
            alt={''}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="#" className="btn btn-primary">
              {price}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
