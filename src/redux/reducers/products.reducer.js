const initialState = {
    loading: null,
    data: null,
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_INITIALIZE":
            return {
                ...state,
                loading: true,
            }
        case "PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "PRODUCTS_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;