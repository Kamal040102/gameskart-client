import { combineReducers } from "redux";
import signinReducer from "./signin.reducer";
import signupReducer from "./signup.reducer";

const reducers = combineReducers({
    signinReducer,
    signupReducer
})

export default reducers;