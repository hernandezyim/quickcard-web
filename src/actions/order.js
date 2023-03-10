import types from '../types/order'

export const setItem = (order) => ({
  type: types.SET_ITEM,
  payload: order,
})
export const updateItem = (order) => ({
  type: types.UPDATE_ITEM,
  payload: order,
})
export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  payload: id,
})

export const setOrders = (orders) => ({
  type: types.SET_ORDERS,
  payload: orders,
})

export const setActiveOrder = (order) => ({
  type: types.SET_ACTIVE_ORDER,
  payload: order,
})
export const removeActiveOrder = () => ({
  type: types.REMOVE_ACTIVE_ORDER,
})

export const addOrder = (order) => ({
  type: types.ADD_ORDER,
  payload: order,
})

export const updateOrder = (order, id) => ({
  type: types.UPDATE_ORDER,
  payload: {
    ...order,
    _id: id,
  },
})

export const deleteOrder = (id) => ({
  type: types.DELETE_ORDER,
  payload: id,
})

export const removeOrders = () => ({
  type: types.REMOVE_ORDERS,
})
