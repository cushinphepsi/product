import axios from 'axios'
import { URL_CONNECT } from '../constant/constant'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: URL_CONNECT,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
    return config
})

axiosClient.interceptors.response.use(async (response) => {
    if (response && response.data) {
        return response.data
    }
})

export default axiosClient