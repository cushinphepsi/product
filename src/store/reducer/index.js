import { combineReducers } from "redux";
import { products } from "./products";
import { itemProduct } from "./itemProduct";
import { sortProduct } from "./sortProduct";

const rootReducer = combineReducers({
    products,
    itemProduct,
    sortProduct
})

export default rootReducer