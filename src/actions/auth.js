import TYPES from '../types/auth'

export const signIn = (user) => ({
  type: TYPES.AUTH.SIGN_IN,
  payload: user,
})

export const signOut = () => async (dispatch) => {
  // clear any case orders products users roles

  localStorage.removeItem('token')

  dispatch({
    type: TYPES.AUTH.SIGN_OUT,
  })
}
