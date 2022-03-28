
// import { ADD_PRODUCT, DELETE_PRODUCT, SHOW_PRODUCT, UPDATE_PRODUCT, SEARCH_PRODUCT } from '../../constant/constant'
// const initValue = []

// export const products = (state = initValue, action) => {
//     switch (action.type) {
//         case SHOW_PRODUCT:
//             return action.products
//         case DELETE_PRODUCT:
//             const id = action.id
//             const newProducts = state.filter(item => item.id !== id)
//             return newProducts
//         case ADD_PRODUCT:
//             state.push(action.product)
//             return [...state]
//         case UPDATE_PRODUCT:
//             const product = action.product
//             let index = state.findIndex(item => item.id === product.id)
//             state[index] = product
//             return state
//         case SEARCH_PRODUCT:
//             return action.products
//         default:
//             return state
//     }
// }

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productsApi from '../../api/productsApi'

export const getAllProductRequest = createAsyncThunk(
    'products/getAllProduct',
    async () => {
        return await productsApi.getAll()
    }
)

export const addProductRequest = createAsyncThunk(
    'products/addProduct',
    async (data, dispatch) => {
        return await productsApi.addProduct(data)
    }
)

export const deleteProductRequest = createAsyncThunk(
    'products/deleteProduct',
    async (id, dispatch) => {
        return await productsApi.deleteProduct(id)
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAllProductRequest.fulfilled]: (state, action) => {
            return action.payload
        },
        [addProductRequest.fulfilled]: (state, action) => {
            state.push(action.payload)
        },
        [deleteProductRequest.fulfilled]: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    },
})

export default productSlice.reducer