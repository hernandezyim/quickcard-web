import React, { useState } from 'react'
import { AiFillAppstore } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../actions/auth'
import useRoles from '../../hooks/useRoles'
import Sidebar from './Sidebar'

export default function Navbar() {
  const dispatch = useDispatch()
  const { isUserAdmitted } = useRoles()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  const handleLogout = () => dispatch(signOut())

  return (
    <>
      {isOpen && <Sidebar onClose={handleToggle} handleLogout={handleLogout} />}
      <nav className="fixed top-0 left-0 bg-slate-700 py-3 md:static w-full">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center text-slate-100">
            <AiFillAppstore className="text-slate-100 text-4xl mr-2" />
            <span className="text-xl font-bold">QuickCart</span>
          </Link>
          <div className="hidden md:block">
            {isUserAdmitted && (
              <>
                <Link
                  to="/product"
                  className="mx-4 text-slate-100 hover:text-gray-200"
                >
                  Productos
                </Link>
                <Link
                  to="/order"
                  className="mx-4 text-slate-100 hover:text-gray-200"
                >
                  Ordenes
                </Link>
              </>
            )}
            <Link
              to="/shop"
              className="mx-4 text-slate-100 hover:text-gray-200"
            >
              Tienda
            </Link>
            <Link
              to="/card"
              className="mx-4 text-slate-100 hover:text-gray-200"
            >
              Pedidos
            </Link>
            <button
              onClick={handleLogout}
              className="bg-slate-100 text-slate-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Cerrar sesión
            </button>
          </div>
          <button
            className="w-10 text-slate-100 md:hidden"
            onClick={handleToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="mt-20 md:mt-0"></div>
    </>
  )
}
