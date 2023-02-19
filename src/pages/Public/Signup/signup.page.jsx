import React from "react";
import SideImage from "../../../components/SideImage/sideImage";
import Signup from "../../../components/Signup/signup";

const SignupPage = () => {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-0 d-none d-md-block col-md-6">
            <SideImage />
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center align-items-center h-100">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
