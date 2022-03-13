import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SHOW_PRODUCT } from '../../constant/constant'
export const getAllProduct = (value) => {
    return {
        type: SHOW_PRODUCT,
        value
    }
}

export const addProduct = (value) => {
    return {
        type: ADD_PRODUCT,
        value
    }
}

export const editProduct = (value) => {
    return {
        type: EDIT_PRODUCT,
        value
    }
}

export const deleteProduct = (value) => {
    return {
        type: DELETE_PRODUCT,
        value
    }
}