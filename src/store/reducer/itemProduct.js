import { UPDATE_PRODUCT } from "../../constant/constant";

const initValue = {}
export const itemProduct = (state = initValue, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT:
            // const product = action.product
            // let index = state.findIndex(item => item.id === product.id)
            // state[index] = product
            console.log(action.product);
            return action.product
        default:
            return state
    }
}
