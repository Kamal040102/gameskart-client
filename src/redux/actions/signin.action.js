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

export const signinReset = () => ({
  type: "RESET_ALL"
})

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
        dispatch(signinSuccess(res.data.data.token));
        localStorage.setItem("token", res.data.data.token);
      })
      .catch((err) => {
        dispatch(signinFailed(err.response.data.message));
      });
  };
};
