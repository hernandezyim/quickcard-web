import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import mainReducer from '../reducers/mainReducer.js'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export default createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
)
