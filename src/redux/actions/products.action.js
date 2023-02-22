import axios from "axios";

export const productsInitialize = () => ({
    type: "PRODUCTS_INITIALIZE"
})

export const productsSuccess = (data) => ({
    type: "PRODUCTS_SUCCESS",
    payload: data
})

export const productsFailed = (err) => ({
    type: "PRODUCTS_FAILED",
    payload: err
})

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch(productsInitialize())
        axios.get(`${process.env.REACT_APP_SERVER_URI}/product`).then((res) => {
            dispatch(productsSuccess(res.data.data))
        }).catch((err) => {
            dispatch(productsFailed(err.response.data.message || err.message))
        })
    }
}

export const addNewProduct = (body) => {
    return (dispatch) => {
        dispatch(productsInitialize())
        axios.post(`${process.env.REACT_APP_SERVER_URI}/product`, body, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => {
            dispatch(productsSuccess(res.data.message))
        }).catch((err) => {
            dispatch(productsFailed(err.response.data.message || err.message))
        })
    }
}