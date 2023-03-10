import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ logged, children }) {
  return logged ? children : <Navigate to="/auth/sign-in" />
}
