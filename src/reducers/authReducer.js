import TYPES from '../types/auth'
const initialState = {
  logged: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.AUTH.SIGN_IN:
      return {
        ...action.payload,
        logged: true,
      }
    case TYPES.AUTH.SIGN_OUT:
      return {
        logged: false,
      }
    default:
      return state
  }
}
