import axiosClient from "./axiosClient"

const productsApi = {
    getAll: () => {
        const url = '/'
        return axiosClient.get(url)
    },
    addProduct: (product) => {
        const url = '/'
        return axiosClient.post(url, product)
    },
    deleteProduct: (id) => {
        const url = `/${id}`
        return axiosClient.delete(url)
    },
    getProductUpdate: (id) => {
        const url = `/${id}`
        return axiosClient.get(url)
    },
    updateProduct: (id, product) => {
        const url = `/${id}`
        return axiosClient.put(url, product)
    }
}

export default productsApi