import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

export default function AuthRouter() {
  return (
    <div className="">
      <Routes>
        <Route path="login" element={<SignInPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="landing" />} />
      </Routes>
    </div>
  )
}
