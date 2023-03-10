import { setProducts } from '../../actions/product'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/product'
const METHOD = 'GET'

export default function startGetProducts(page = 1) {
  return async (dispatch, getStore) => {
    const { token } = getStore().auth
    dispatch(startLoading())

    const url = `${BASE_URL}${ENDPOINT}?page=${page}&limit=${50 * page}`

    const data = await customFetch(
      {
        url,
        method: METHOD,
        headers: getAuthHeaders(token),
      },
      dispatch
    )

    if (!data) return
    dispatch(setProducts(data.products))
    dispatch(endLoading())
  }
}
