import { Navigate } from 'react-router-dom'

export default function PublicRoute({ logged, children }) {
  return !logged ? children : <Navigate to="/" />
}
