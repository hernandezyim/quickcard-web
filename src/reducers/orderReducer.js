import types from '../types/order'

const initialState = {
  items: [],
  uid: '',
  _id: '',
  orders: [],
  activeOrder: {
    items: [],
  },
}

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ITEM:
      return {
        ...state,
        activeOrder: {
          items: [
            {
              product: {
                _id: action.payload._id,
                name: action.payload.name,
                price: action.payload.price,
              },

              quantity: 1,
            },
            ...state.activeOrder.items,
          ],
        },
      }
    case types.UPDATE_ITEM:
      state.activeOrder.items = state.activeOrder.items.map((item) => {
        if (item.product._id === action.payload._id) {
          item.quantity = action.payload.quantity
        }
        return item
      })
      return {
        ...state,
        activeOrder: { ...state.activeOrder },
      }
    case types.REMOVE_ITEM:
      return {
        ...state,
        activeOrder: {
          ...state.activeOrder,
          items: state.activeOrder.items.filter(
            (item) => item.product._id !== action.payload
          ),
        },
      }
    case types.SET_ORDERS:
      const newOrders = action.payload.filter((newOrder) =>
        state.orders.every((order) => newOrder._id !== order._id)
      )
      return {
        ...state,
        orders: [...state.orders, ...newOrders],
      }
    case types.REMOVE_ORDERS:
      return {
        ...state,
        orders: [],
      }
    case types.REMOVE_ACTIVE_ORDER:
      return {
        ...state,
        activeOrder: {
          items: [],
        },
      }
    case types.SET_ACTIVE_ORDER:
      return {
        ...state,
        activeOrder: {
          ...action.payload,
        },
      }
    case types.ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      }
    case types.UPDATE_ORDER:
      const updatedOrders = state.orders.map((order) => {
        if (order._id === action.payload._id) {
          return { ...order, ...action.payload }
        }
        return order
      })
      return {
        ...state,
        orders: [...updatedOrders],
      }
    case types.DELETE_ORDER:
      const filteredOrders = state.orders.filter(
        (order) => order._id !== action.payload
      )
      return {
        ...state,
        orders: filteredOrders,
      }

    default:
      return state
  }
}
