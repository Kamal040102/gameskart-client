import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux";
import Table from "../../components/Table/Table";
import AdminAddProduct from "../../components/Admin/AdminAddProduct/adminAddProduct";

const DashboardAdminProducts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productsReducer);

  React.useEffect(() => {
    dispatch(productActions.getAllProducts());
  }, []);

  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add New Product
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="p-5">
              <AdminAddProduct />
            </div>
          </div>
        </div>
      </div>
      <div>
        {data ? (
          <Table tableHead={Object.keys(data[0])} tableData={data} />
        ) : null}
      </div>
    </div>
  );
};

export default DashboardAdminProducts;
