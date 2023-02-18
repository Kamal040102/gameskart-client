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
                loading: false,
                token: action.payload
            }
        case "SIGNIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default signinReducer;