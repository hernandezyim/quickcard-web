const pageTitles = {
  '/lading': 'QuickCart',
  '/product': 'Productos',
  '/order': 'Órdenes',
  '/shop': 'Tienda',
  '/card': 'Pedidos',
  '/login': 'Iniciar sesión',
  '/register': 'Registro',
}
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export default function usePageTitle() {
  const location = useLocation()

  const pageTitle = useMemo(() => {
    const title = pageTitles[location.pathname]
    return title ? `${title} - QuickCart` : 'QuickCart'
  }, [location.pathname])

  document.title = pageTitle
}
