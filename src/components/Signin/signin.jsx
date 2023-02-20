import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinActions } from "../../redux";
import { Toast } from "../toast/toast";

const Signin = () => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector((state) => state.signinReducer);
  const [body, setBody] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    if (error && loading === false) {
      Toast("danger", error);
      dispatch(signinActions.signinReset());
    } else if (token && loading === false) {
      Toast("success", "Sign in Success.");
      dispatch(signinActions.signinReset());
    }
  }, [loading]);

  return (
    <>
      <div className="border rounded rounded-5 p-5">
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
        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={(e) => {
            e.preventDefault();
            dispatch(signinActions.signinApi(body));
          }}
        >
          Sign in
        </button>
        <div className="mt-3">
          New Here? <Link to={"/signup"}>Sign up Here</Link>
        </div>
      </div>
    </>
  );
};

export default Signin;
