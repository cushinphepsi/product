import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, SHOW_PRODUCT } from '../constant/constant'
import { callApi } from '../store/connect'

export const getAllProductRequest = () => {
    return (dispatch) => {
        callApi('GET', '/', null)
            .then(products => {
                dispatch({ type: SHOW_PRODUCT, products })
            })
    }
}

export const deleteProductRequest = (id) => {
    return (dispatch) => {
        callApi('DELETE', `/${id}`, null)
            .then(res => {
                dispatch({ type: DELETE_PRODUCT, id })
            })
    }
}

export const addProductRequest = (product) => {
    return (dispatch) => {
        callApi('post', '/', product)
            .then(response => {
                dispatch({ type: ADD_PRODUCT, product })
            })

    }
}

export const getProductUpdateRequest = (id) => {
    return (dispatch) => {
        callApi('GET', `/${id}`, null)
            .then(product => {
                console.log('ttttttt');
                dispatch({ type: UPDATE_PRODUCT, product })
            })
    }
}

export const updateProductRequest = (id, product) => {
    return (dispatch) => {
        callApi('put', `/${id}`, product)
            .then(response => {
                dispatch({ type: UPDATE_PRODUCT, product: response })
            })
    }
}
