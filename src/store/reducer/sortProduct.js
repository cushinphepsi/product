import { SORT_PRODUCT } from "../../constant/constant";

const initValue = ''

export const sortProduct = (state = initValue, action) => {
    switch (action.type) {
        case SORT_PRODUCT:
            return action.sortBy;
        default:
            return state
    }
}