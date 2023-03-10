import { updateProduct } from '../../actions/product'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/product'
const METHOD = 'PUT'

export default function startUpdateProduct(product, id) {
  return async (dispatch, getStore) => {
    const { token } = getStore().auth
    dispatch(startLoading())

    const url = `${BASE_URL}${ENDPOINT}/${id}`

    await customFetch(
      {
        url,
        method: METHOD,
        body: product,
        headers: getAuthHeaders(token),
      },
      dispatch
    )

    dispatch(updateProduct(product, id))
    dispatch(endLoading())
  }
}
