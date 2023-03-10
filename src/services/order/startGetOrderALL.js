import { setOrders } from '../../actions/order'
import { endLoading, startLoading } from '../../actions/ui'
import { API_URL } from '../../configs/keys'
import customFetch from '../../helpers/customFetch'
import { getAuthHeaders } from '../../helpers/getAuthHeaders'

const BASE_URL = API_URL + '/api/v1'
const ENDPOINT = '/order/all'
const METHOD = 'GET'

export default function startGetOrderAll(page = 1) {
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
    if (data.orders.length > 0) {
      dispatch(
        setOrders(
          data.orders.map((order) => ({
            ...order,
            items: order.items.filter((item) => item.product),
            name: order.uid.name,
          }))
        )
      )
    }
    dispatch(endLoading())
  }
}
