
import axios from "axios"
import { URL_CONNECT } from "../constant/constant"

 export const callApi = async (method, pathName, data) => {
    let result
    await axios({
        method,
        url: URL_CONNECT + pathName,
        data
    }).then(res => {
        result = res.data
        return result
        
    })
    return result
}