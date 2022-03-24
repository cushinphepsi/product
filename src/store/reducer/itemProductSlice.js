// import { GET_PRODUCT_UPDATE } from "../../constant/constant";

// const initValue = {}
// export const itemProduct = (state = initValue, action) => {
//     switch (action.type) {
//         case GET_PRODUCT_UPDATE:
//             return action.product
//         default:
//             return state
//     }
// }

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { callApi } from '../connect'

export const getProductUpdateRequest = createAsyncThunk(
    'products/getProductUpdate',
    async (data, dispatch) => {
        return callApi('GET', `/${data}`, null)
            .then(product => product)
    }
)

export const updateProductRequest = createAsyncThunk(
    'products/getProductUpdate',
    async (data, dispatch) => {
        return callApi('put', `/${data.id}`, data.value)
            .then(product => product)
    }
)

const itemProduct = createSlice({
    name: 'product',
    initialState: {},
    reducers: {},
    extraReducers: {
        [getProductUpdateRequest.fulfilled]: (state, action) => {
            return action.payload
        },
        [updateProductRequest.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export default itemProduct.reducer
