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