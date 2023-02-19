import React from 'react';
import "./App.css"
import { Routes, Route } from "react-router-dom";
import DashboardAdminPage from './pages/Admin/dashboard.admin.page';
import SigninPage from './pages/Public/Signin/signin.page';
import SignupPage from './pages/Public/Signup/signup.page';
import StorePage from './pages/Public/Store/store.page';
import Navbar from "./components/Navbar/navbar"
import TestComponents from './pages/Public/TestComponents/testComponents';
import ToastContainer from './components/ToastContainer/toastContainer';
import ProductPage from './pages/Public/Product/ProductPage/productPage';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' exact element={<StorePage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/admin/dashboard' element={<DashboardAdminPage />} />
        <Route path='/test-components' element={<TestComponents />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App