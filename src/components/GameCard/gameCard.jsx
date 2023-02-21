import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ product_name, product_description }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product_name}</h5>
          <p className="card-text">{product_description}</p>
          <Link to="/product/id" className="btn btn-primary">
            Watch More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
