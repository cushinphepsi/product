
import { URL_CONNECT } from "../constant/constant"

export const callApi = (method, pathName, data) => {
    return fetch(URL_CONNECT + pathName, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    }).then(res => res.json())
        .then(data => {
            return data
        })
}
