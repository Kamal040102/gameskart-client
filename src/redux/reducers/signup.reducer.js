const initialState = {
    message: null,
    error: null,
    loading: null
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP_INITIALIZATION":
            return {
                ...state,
                loading: true
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                loading: false,
                message: action.payload
            }
        case "SIGNUP_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "RESET_ALL":
            return initialState;
        default:
            return state;
    }
}

export default signupReducer;