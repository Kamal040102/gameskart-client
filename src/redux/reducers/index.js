import { combineReducers } from "redux";
import signinReducer from "./signin.reducer";
import signupReducer from "./signup.reducer";
import productsReducer from "./products.reducer";

const reducers = combineReducers({
    signinReducer,
    signupReducer,
    productsReducer
})

export default reducers;