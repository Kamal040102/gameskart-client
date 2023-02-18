import React from 'react';
import { Routes, Route } from "react-router-dom";
import DashboardAdminPage from './pages/Admin/dashboard.admin.page';
import SigninPage from './pages/Public/Signin/signin.page';
import SignupPage from './pages/Public/Signup/signup.page';
import StorePage from './pages/Public/Store/store.page';
import Navbar from "./components/Navbar/navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<StorePage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/admin/dashboard' element={<DashboardAdminPage />} />
      </Routes>
    </>
  )
}

export default App