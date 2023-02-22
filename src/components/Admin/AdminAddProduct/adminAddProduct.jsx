import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../redux";
import Form from "../../Form/form";
import { Toast } from "../../toast/toast";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => state.productsReducer
  );

  const fields = [
    { label: "Brand*", type: "text", value: "brand" },
    { label: "Name*", type: "text", value: "name" },
    { label: "Description*", type: "text", value: "description" },
    { label: "Price*", type: "number", value: "price" },
    { label: "Suits*", type: "text", value: "suits" },
    { label: "Stock", type: "number", value: "stock" },
  ];

  React.useEffect(() => {
    if (error) {
      Toast("danger", error);
    } else {
      Toast("success", data);
    }
  }, [loading]);

  const onClick = (e, data) => {
    e.preventDefault();
    dispatch(productActions.addNewProduct(data));
    dispatch(productActions.getAllProducts());
  };

  return (
    <>
      <Form buttonLabel={"Add New Product"} data={fields} onClick={onClick} />
    </>
  );
};

export default AdminAddProduct;
