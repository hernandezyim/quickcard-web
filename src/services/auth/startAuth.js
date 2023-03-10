import { signIn } from '../../actions/auth'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/auth'
const METHOD = 'POST'

export default function startAuth(userCredentials) {
  return async (dispatch) => {
    const url = `${BASE_URL}${ENDPOINT}/${
      userCredentials.name ? 'sign_up' : 'sign_in'
    }`

    const data = await customFetch(
      { url, method: METHOD, body: userCredentials },
      dispatch
    )

    if (!data) return

    const { id, name, token, roles } = data

    localStorage.setItem('token', token)
    dispatch(signIn({ id, name, token, roles }))
  }
}
