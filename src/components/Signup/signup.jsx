import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signupActions } from "../../redux";
import { Toast } from "../../components/toast/toast";

const Signup = () => {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(
    (state) => state.signupReducer
  );
  const [body, setBody] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });

  React.useEffect(() => {
    if (error && loading === false) {
      Toast("danger", error);
      dispatch(signupActions.signupReset());
    } else if (message && loading === false) {
      Toast("success", message);
      dispatch(signupActions.signupReset());
    }
  }, [loading]);

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
          onChange={(e) => {
            setBody({ ...body, name: e.target.value });
          }}
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
          onChange={(e) => {
            setBody({ ...body, username: e.target.value });
          }}
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
          onChange={(e) => {
            setBody({ ...body, email: e.target.value });
          }}
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
          onChange={(e) => {
            setBody({ ...body, password: e.target.value });
          }}
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
          onChange={(e) => {
            setBody({ ...body, confirmPassword: e.target.value });
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={(e) => {
          e.preventDefault();
          dispatch(signupActions.signupApi(body));
        }}
      >
        Sign up
      </button>
      <div className="mt-3">
        Already Registered? <Link to={"/signin"}>Sign in Here</Link>
      </div>
    </div>
  );
};

export default Signup;
