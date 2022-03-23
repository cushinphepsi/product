import { GET_PRODUCT_UPDATE } from "../../constant/constant";

const initValue = {}
export const itemProduct = (state = initValue, action) => {
    switch (action.type) {
        case GET_PRODUCT_UPDATE:
            return action.product
        default:
            return state
    }
}
