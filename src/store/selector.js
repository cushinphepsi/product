import { createSelector } from '@reduxjs/toolkit'

export const productSelector = (state => state.products)
export const itemProductSelector = (state => state.itemProduct)
export const sortSelector = (state => state.sortProduct)

export const productSort = createSelector(productSelector, sortSelector, (products, sortBy) => {
    if (sortBy)
        products = sortProductItem(products, sortBy)
    return products
})

const sortProductItem = (products, sortBy) => {
    const sortValue = 1
    products.sort((current, next) => {
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
    return products
}