import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import useRoles from '../hooks/useRoles'
import CardPage from '../pages/CardPage'
import OrderPage from '../pages/OrderPage'
import ProductPage from '../pages/ProductPage'
import ShopPage from '../pages/ShopPage'

export default function AppRouter() {
  const { isUserAdmitted } = useRoles()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/card" element={<CardPage />} />

        {isUserAdmitted && (
          <>
            <Route path="order" element={<OrderPage />} />
            <Route path="product" element={<ProductPage />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}
