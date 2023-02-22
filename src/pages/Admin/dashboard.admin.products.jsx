import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux";
import Table from "../../components/Table/Table";
import AdminAddProduct from "../../components/Admin/AdminAddProduct/adminAddProduct";
import Accordion from "../../components/Accordion/accordion";

const DashboardAdminProducts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsReducer);

  React.useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);

  return (
    <div className="container">
      <Accordion title={"Add New Product into Inventory"}>
        <AdminAddProduct />
      </Accordion>
      <div>
        {data && typeof data !== "string" ? (
          <Table tableHead={Object.keys(data[0])} tableData={data} />
        ) : null}
      </div>
    </div>
  );
};

export default DashboardAdminProducts;
