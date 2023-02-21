import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux";
import Table from "../../components/Table/Table";

const DashboardAdminProducts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsReducer);

  React.useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);

  return (
    <div className="container">
      <div>
        <Table tableHead={Object.keys(data[0])} tableData={data} />
      </div>
    </div>
  );
};

export default DashboardAdminProducts;
