// Action Types
export const BUY_PRODUCT = "BUY_PRODUCT"

// Action Creator
export const buyProduct = (index) => ({
    type:'BUY_PRODUCT', index
})

export const createProduct = (data) => ({
    type:'CREATE_PRODUCT',  payload: data
})
