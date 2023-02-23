import React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Loader from "./components/Loader/loader";

const AdminRoute = ({ role }) => {
  if (role && role === "admin") {
    return <Outlet />;
  }

  Toast("info", "You aren't authorized to access this page.");
  return <Navigate to={"/"} replace />;
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.signinReducer);

  React.useEffect(() => {
    if (localStorage.getItem("token") && !data) {
      dispatch(signinActions.checkAuth());
    }
  }, [location.pathname]);

  React.useEffect(() => {
    if (data && loading === false) {
      if (data.user_role === "admin") {
        navigate("/admin/dashboard");
      } else if (data.user_role === "user") {
        navigate("/");
      }
    }
  }, [data, loading]);

  return (
    <div id="app">
      <Loader loading={loading} />
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<StorePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/test-components" element={<TestComponents />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route element={<AdminRoute role={data?.user_role} />}>
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
          <Route path="/admin/products" element={<DashboardAdminProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
