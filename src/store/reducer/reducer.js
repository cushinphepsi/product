
import { SHOW_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../../constant/constant'
import { callApi } from '../connect';
export const initValue = []

export const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_PRODUCT:
            return action.value
        case ADD_PRODUCT:
            callApi('post', '/', action.value)
                .then(res => {
                    return state = res
                })
            return state;
        case EDIT_PRODUCT:
            callApi('put', `/${action.value.id}`, action.value)
            return state;
        case DELETE_PRODUCT:
            const id = action.value
            callApi('delete', `/${id}`, null)
            return state;
        default:
            break;
    }
}