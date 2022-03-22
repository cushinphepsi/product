
import { ADD_PRODUCT, DELETE_PRODUCT, SHOW_PRODUCT } from '../../constant/constant'
const initValue = []

export const products = (state = initValue, action) => {
    switch (action.type) {
        case SHOW_PRODUCT:
            return action.products
        case DELETE_PRODUCT:
            const id = action.id
            const newProducts = state.filter(item => item.id !== id)
            return newProducts
        case ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        default:
            return state
    }
}