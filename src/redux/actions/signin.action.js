import axios from "axios";

export const signinInitialize = () => ({
  type: "SIGNIN_INITIALIZATION",
});

export const signinSuccess = (token) => ({
  type: "SIGNIN_SUCCESS",
  payload: token,
});

export const signinFailed = (err) => ({
  type: "SIGNIN_FAILED",
  payload: err,
});

export const signinApi = (body) => {
  return (dispatch) => {
    dispatch(signinInitialize());
    axios
      .post(`${process.env.REACT_APP_SERVER_URI}/auth/signin`, body, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(signinSuccess(res.data.message));
        localStorage.setItem("token", res.data.message);
      })
      .catch((err) => {
        dispatch(signinFailed(err.message));
      });
  };
};
