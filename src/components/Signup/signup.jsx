import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="border rounded rounded-5 p-5">
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="nameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUsername1" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputUsername1"
          aria-describedby="usernameHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputConfirmPassword1" className="form-label">
          Confirm Password
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputConfirmPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Sign up
      </button>
      <div className="mt-3">
        Already Registered? <Link to={"/signin"}>Sign in Here</Link>
      </div>
    </div>
  );
};

export default Signup;
