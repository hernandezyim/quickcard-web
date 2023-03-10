import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import LoadingScreen from '../components/ui/LoadingScreen'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import isAuth from '../services/auth/isAuth'
import { signIn } from '../actions/auth'
import AppRouter from './AppRouter'
import startGetProducts from '../services/product/startGetProducts'

export default function RootRouter() {
  const dispatch = useDispatch()
  const { logged } = useSelector((state) => state.auth)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    ;(async () => {
      const user = await isAuth()

      if (user) {
        dispatch(signIn(user))
        dispatch(startGetProducts())
      }
      setIsChecked(true)
    })()
  }, [dispatch])

  return isChecked ? (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute logged={logged}>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute logged={logged}>
              <AppRouter />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <LoadingScreen home={true} />
  )
}
