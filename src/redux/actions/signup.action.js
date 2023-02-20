import axios from "axios";

export const signupInitialize = () => ({
    type: "SIGNUP_INITIALIZE"
})

export const signupSuccess = (message) => ({
    type: "SIGNUP_SUCCESS",
    payload: message
})

export const signupFailed = (err) => ({
    type: "SIGNUP_FAILED",
    payload: err
})

export const signupReset = () => ({
    type: "RESET_ALL"
})

export const signupApi = (body) => {
    return (dispatch) => {
        dispatch(signupInitialize())
        axios.post(`${process.env.REACT_APP_SERVER_URI}/auth/signup`, body, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            dispatch(signupSuccess(res.data.message))
        }).catch((err) => {
            dispatch(signupFailed(err.response.data.message))
        })
    }
}