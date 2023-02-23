import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import DashboardAdminPage from "./pages/Admin/dashboard.admin.page";
import DashboardAdminProducts from "./pages/Admin/dashboard.admin.products";
import SigninPage from "./pages/Public/Signin/signin.page";
import SignupPage from "./pages/Public/Signup/signup.page";
import StorePage from "./pages/Public/Store/store.page";
import Navbar from "./components/Navbar/navbar";
import TestComponents from "./pages/Public/TestComponents/testComponents";
import { ToastContainer } from "react-toastify";
import ProductPage from "./pages/Public/Product/ProductPage/productPage";
import { Toast } from "./components/toast/toast";
import { useDispatch, useSelector } from "react-redux";
import { signinActions } from "./redux";

const AdminRoute = ({ role }) => {
  if (role !== "admin") {
    Toast("info", "You aren't authorized to access this page.");
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

const PrivateRoute = ({ role }) => {
  if (role !== "user") {
    Toast("info", "You aren't authorized to access this page.");
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.signinReducer);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(signinActions.checkAuth());
    }
  }, []);

  return (
    <div id="app">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<StorePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<AdminRoute role={data?.user_role} />}>
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
          <Route path="/admin/products" element={<DashboardAdminProducts />} />
        </Route>
        <Route path="/test-components" element={<TestComponents />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default App;
