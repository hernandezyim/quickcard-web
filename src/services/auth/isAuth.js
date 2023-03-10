import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/auth'
const METHOD = 'GET'

export default async function isAuth() {
  const token = localStorage.getItem('token')
  if (!token) return

  const url = `${BASE_URL}${ENDPOINT}`

  const data = await customFetch({
    url,
    method: METHOD,
    headers: getAuthHeaders(token),
  })

  if (!data) {
    localStorage.removeItem('token')
    return
  }

  const { id, name, newToken, roles } = data

  localStorage.setItem('token', newToken)

  return { id, name, token: newToken, roles }
}
