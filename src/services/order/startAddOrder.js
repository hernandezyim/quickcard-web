import { removeActiveOrder } from '../../actions/order'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/order'
const METHOD = 'POST'

export default function startAddOrder(order) {
  return async (dispatch, getStore) => {
    const { token } = getStore().auth

    dispatch(startLoading())

    const url = `${BASE_URL}${ENDPOINT}`

    const data = await customFetch(
      {
        url,
        method: METHOD,
        body: order,
        headers: getAuthHeaders(token),
      },
      dispatch
    )
    dispatch(removeActiveOrder())
    dispatch(endLoading())
  }
}
