import { createSelector } from '@reduxjs/toolkit'

export const productSelector = (state => state.products)
export const itemProductSelector = (state => state.itemProduct)
export const sortSelector = (state => state.filterProduct.sortBy)
export const searchSelector = (state => state.filterProduct.search)

export const productView = createSelector(productSelector, searchSelector, sortSelector, (products, search, sortBy) => {
    if (search) {
        products = sortBy ?
            sortProductItem(products.filter(product => product.name.includes(search)), sortBy) :
            products.filter(product => product.name.includes(search))
    }
    else if (sortBy)
        products = sortProductItem(products, sortBy)
    return products
})

const sortProductItem = (products, sortBy) => {
    const sortValue = 1
    const arrayForSort = [...products]
    arrayForSort.sort((current, next) => {
        const productA = current[sortBy].toUpperCase()
        const productB = next[sortBy].toUpperCase()
        if (productA < productB) {
            return -sortValue;
        }
        if (productA > productB) {
            return sortValue;
        }
        return 0;
    })
    return arrayForSort
}