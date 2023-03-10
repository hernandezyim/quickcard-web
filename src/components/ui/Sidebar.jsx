import { Link } from 'react-router-dom'
import useRoles from '../../hooks/useRoles'
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { AiFillShopping } from 'react-icons/ai'

export default function Sidebar({ onClose, handleLogout }) {
  const { isUserAdmitted } = useRoles()

  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-slate-700 text-white flex flex-col z-10">
      <div className="flex items-center justify-end px-4 mt-11">
        <button onClick={onClose} className="w-10 text-slate-100 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M4.5 4.5L19.5 19.5M19.5 4.5L4.5 19.5"
              strokeWidth="2"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <nav className="flex-1 mt-4 px-4 text-sm">
        <ul className="text-end italic text-xl font-semibold ">
          <li className="mb-2">
            {isUserAdmitted && (
              <>
                <Link
                  to="/product"
                  className="block py-2 px-4 hover:bg-slate-600 border-b border-gray-600"
                  onClick={onClose}
                >
                  <MdOutlineProductionQuantityLimits className="inline-block align-middle mr-2 text-slate-100" />
                  Productos
                </Link>
                <Link
                  to="/order"
                  className="block py-2 px-4 hover:bg-slate-600 border-b border-gray-600"
                  onClick={onClose}
                >
                  <MdOutlineProductionQuantityLimits className="inline-block align-middle mr-2 text-slate-100" />
                  Ordenes
                </Link>
              </>
            )}
          </li>
          <li className="mb-2">
            <Link
              to="/shop"
              className="block py-2 px-4 hover:bg-slate-600 border-b border-gray-600"
              onClick={onClose}
            >
              <AiFillShopping className="inline-block align-middle mr-2 text-slate-100" />
              Tienda
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/card"
              className="block py-2 px-4 hover:bg-slate-600 border-b border-gray-600"
              onClick={onClose}
            >
              <FaShoppingCart className="inline-block align-middle mr-2 text-slate-100" />
              Pedidos
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-3 border-t border-slate-600">
        <button
          onClick={handleLogout}
          className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg w-full font-bold text-xl hover:bg-slate-600 hover:text-white"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
