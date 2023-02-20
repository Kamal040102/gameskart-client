import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ product_name, product_description }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product_name}</h5>
          <p class="card-text">{product_description}</p>
          <Link to="/product/id" class="btn btn-primary">
            Watch More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
