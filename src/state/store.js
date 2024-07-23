import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./authState/Reducer";
import { customerProductReducer } from "./product/Reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))