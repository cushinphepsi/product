import { combineReducers } from "redux";
import { products } from "./products";
import { itemProduct } from "./itemProduct";

const rootReducer = combineReducers({
    products,
    itemProduct
})

export default rootReducer