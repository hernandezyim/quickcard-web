import { endLoading, setErrors, startLoading } from '../actions/ui'
import handleError from './handleError'

const STATUS_NOT_CONTENT = 204

export default async function customFetch(options, dispatch = () => {}) {
  try {
    const {
      url,
      method,
      headers = {
        'Content-Type': 'application/json',
      },
      body,
    } = options
    const reqOpts = {
      method,
      headers,
      body: JSON.stringify(body),
    }
    dispatch(startLoading())

    const response = await fetch(url, reqOpts)

    if (response.ok) {
      dispatch(endLoading())
      if (response.status !== STATUS_NOT_CONTENT) return await response.json()
      return
    }

    const errors = handleError({
      status: response.status,
      message: response.statusText,
    })

    dispatch(setErrors(errors))
    dispatch(endLoading())
  } catch (error) {
    console.error('An error occurred:', error)
    dispatch(setErrors(['An error occurred.']))
    dispatch(endLoading())
  }
}
