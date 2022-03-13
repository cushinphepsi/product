import { createContext, useReducer } from "react";
import { initValue, reducer } from "./reducer/reducer";

export const ContextProduct = createContext()

export const ProductProvider = ({ children }) => {
    const [products, dispatch] = useReducer(reducer, initValue)

    const value = {
        products,
        dispatch
    }
    return (
        <ContextProduct.Provider value={value}>
            {children}
        </ContextProduct.Provider>
    )
}