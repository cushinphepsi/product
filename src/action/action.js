import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, SHOW_PRODUCT, GET_PRODUCT_UPDATE, SEARCH_PRODUCT, SORT_PRODUCT } from '../constant/constant'
import { callApi } from '../store/connect'

export const getAllProductRequest = (sortBy) => {
    return (dispatch) => {
        callApi('GET', '/', null)
            .then(products => {
                if (sortBy)
                    sortProductItem(products, sortBy)
                dispatch({ type: SHOW_PRODUCT, products })
            })
    }
}

const sortProductItem = (products, sortBy) => {
    const sortValue = 1
    products.sort((current, next) => {
        const productA = current[sortBy].toUpperCase()
        const productB = next[sortBy].toUpperCase()
        if (productA < productB) {
            return -sortValue;
        }
        if (productA > productB) {
            return sortValue;
        }
        return 0;
    })
    return products
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
                dispatch({ type: GET_PRODUCT_UPDATE, product })
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

export const searchProductRequest = (nameSearch) => {
    return (dispatch) => {
        callApi('get', `/?name=${nameSearch}`, null)
            .then(res => {
                dispatch({ type: SEARCH_PRODUCT, products: res })
            })
    }
}

export const sortProduct = (sortBy) => {
    return (dispatch) => {
        dispatch({ type: SORT_PRODUCT, sortBy })
    }
}
