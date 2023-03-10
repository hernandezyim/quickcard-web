import types from '../types/product'

export const setProducts = (products) => {
  return {
    type: types.SET_PRODUCTS,
    payload: products,
  }
}
export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    payload: product,
  }
}
export const updateProduct = (product, id) => {
  return {
    type: types.UPDATE_PRODUCT,
    payload: {
      ...product,
      _id: id,
    },
  }
}

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: id,
  }
}

export const setActiveProduct = (product) => ({
  type: types.SET_ACTIVE_PRODUCT,
  payload: product,
})

export const removeActiveProduct = (product) => ({
  type: types.REMOVE_ACTIVE_PRODUCT,
})
