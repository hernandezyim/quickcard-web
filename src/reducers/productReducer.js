import types from '../types/product'

const initialState = {
  products: [],
  activeProduct: null,
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: { ...action.payload },
      }
    case types.REMOVE_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: null,
      }
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      }
    case types.UPDATE_PRODUCT:
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, ...action.payload }
        }
        return product
      })
      return {
        ...state,
        products: updatedProducts,
      }

    case types.DELETE_PRODUCT:
      const filteredProducts = state.products.filter(
        (product) => product._id !== action.payload
      )
      return {
        ...state,
        products: filteredProducts,
      }
    case types.ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      }

    case types.SET_ORDER_ACTIVE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === action.payload) {
            product.orderActive = true
          }
          return product
        }),
      }
    default:
      return state
  }
}
