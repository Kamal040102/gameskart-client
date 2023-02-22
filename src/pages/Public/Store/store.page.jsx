import axios from "axios";
import React from "react";
import GameCard from "../../../components/GameCard/gameCard";
import { Toast } from "../../../components/toast/toast";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../redux/index";

const StorePage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state) => state.productsReducer
  );

  React.useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);

  return (
    <>
      <div className="container p-5">
        <div className="row">
          {data?.map((product, key) => {
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
