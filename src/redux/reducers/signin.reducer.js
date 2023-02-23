const initialState = {
    token: null,
    error: null,
    loading: null,
    data: null
}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN_INITIALIZATION":
            return {
                ...state,
                loading: true
            }
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                loading: true,
                token: action.payload
            }
        case "SIGNIN_CHECK_AUTH":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "SIGNIN_FAILED":
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

export default signinReducer;