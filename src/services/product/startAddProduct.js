import { addProduct } from '../../actions/product'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/product'
const METHOD = 'POST'

export default function startAddProduct(product) {
  return async (dispatch, getStore) => {
    dispatch(startLoading())

    const { token } = getStore().auth
    const headers = getAuthHeaders(token)
    const url = `${BASE_URL}${ENDPOINT}`
    const data = await customFetch(
      {
        url,
        method: METHOD,
        body: product,
        headers,
      },
      dispatch
    )
    dispatch(addProduct(data.product))
    dispatch(endLoading())
  }
}
