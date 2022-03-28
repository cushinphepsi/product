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
import productsApi from '../../api/productsApi'

export const getProductUpdateRequest = createAsyncThunk(
    'products/getProductUpdate',
    async (data, dispatch) => {
        return await productsApi.getProductUpdate(data)
    }
)

export const updateProductRequest = createAsyncThunk(
    'products/updateProduct',
    async (data, dispatch) => {
        return await productsApi.updateProduct(data.id, data.value)
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
