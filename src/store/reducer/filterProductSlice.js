// import { SORT_PRODUCT } from "../../constant/constant";

// const initValue = ''

// export const filterProduct = (state = initValue, action) => {
//     switch (action.type) {
//         case SORT_PRODUCT:
//             return action.sortBy;
//         default:
//             return state
//     }
// }

import { createSlice } from '@reduxjs/toolkit'

const filterProduct = createSlice({
    name: 'filterProduct',
    initialState: {
        search: '',
        sortBy: ''
    },
    reducers: {
        searchProduct: (state, action) => {
            state.search = action.payload
            return state
        },
        sortProduct: (state, action) => {
            state.sortBy = action.payload
            return state
        }
    }
})

export const { searchProduct, sortProduct } = filterProduct.actions
export default filterProduct.reducer