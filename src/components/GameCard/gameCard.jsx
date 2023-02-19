import React from "react";
import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="/product/id" class="btn btn-primary">
          Watch More
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
