import { deleteProduct } from '../../actions/product'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/product'
const METHOD = 'DELETE'

export default function startDeleteProduct(id) {
  return async (dispatch, getStore) => {
    const { token } = getStore().auth
    dispatch(startLoading())
    const url = `${BASE_URL}${ENDPOINT}/${id}`

    await customFetch(
      { url, method: METHOD, headers: getAuthHeaders(token) },
      dispatch
    )
    dispatch(deleteProduct(id))
    dispatch(endLoading())
  }
}
