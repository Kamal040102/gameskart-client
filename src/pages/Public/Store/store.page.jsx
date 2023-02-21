import axios from "axios";
import React from "react";
import GameCard from "../../../components/GameCard/gameCard";
import { Toast } from "../../../components/toast/toast";

const StorePage = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URI}/product`)
      .then((res) => {
        setProducts(res.data.data);
        Toast("success", "All contents loaded.");
      })
      .then((err) => {
        Toast("danger", err.response.data.message);
      });
  }, []);
  return (
    <>
      <div className="container p-5">
        <div className="row">
          {products?.map((product, key) => {
            return (
              <GameCard
                key={key}
                product_name={product.product_name}
                product_description={product.product_description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StorePage;
