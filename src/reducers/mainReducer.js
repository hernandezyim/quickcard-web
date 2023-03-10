import { combineReducers } from 'redux'
import authReducer from './authReducer'
import uiReducer from './uiReducer'
import orderReducer from './orderReducer'
import productReducer from './productReducer'

export default combineReducers({
  product: productReducer,
  ui: uiReducer,
  order: orderReducer,
  auth: authReducer,
})
