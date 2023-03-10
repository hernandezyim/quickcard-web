import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeActiveProduct } from '../../actions/product'
import useForm from '../../hooks/useForm'
import startAddProduct from '../../services/product/startAddProduct'
import startUpdateProduct from '../../services/product/startUpdateProduct'

export default function EdictProductModal({ onClose }) {
  const dispatch = useDispatch()
  const { activeProduct } = useSelector((state) => state.product)
  const [formValues, handleInputChange] = useForm(
    activeProduct ?? {
      name: '',
      quantity: '',
      price: '',
    }
  )
  const onSubmit = (event) => {
    event.preventDefault()
    if (activeProduct?._id) {
      dispatch(startUpdateProduct(formValues, activeProduct?._id))
    } else dispatch(startAddProduct(formValues))
    dispatch(removeActiveProduct())
    onClose()
  }

  return (
    <div className=" fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="w-10/12 inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-middle transition-all transform bg-slate-100 shadow-xl rounded-lg sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="mt-5">
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="text-start block text-gray-700 font-bold mb-2"
                    >
                      Nombre del Producto
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Ingrese el nombre"
                      onChange={handleInputChange}
                      value={formValues.name}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="quantity"
                      className="text-start block text-gray-700 font-bold mb-2"
                    >
                      Cantidad
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      max="10"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow
                      -outline"
                      placeholder="Ingrese la cantidad"
                      onChange={handleInputChange}
                      value={formValues.quantity}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="text-start block text-gray-700 font-bold mb-2"
                    >
                      Precio
                    </label>
                    <input
                      type="number"
                      name="price"
                      min="1"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Ingrese el precio"
                      onChange={handleInputChange}
                      value={formValues.price}
                      required
                    />
                  </div>
                  <div className="flex flex-col-reverse justify-between mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="mt-4 w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-700 text-base font-medium text-slate-100 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 sm:w-auto sm:text-sm sm:mt-0"
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="mt-2 w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 sm:mt-0 sm:ml-0 sm:w-auto sm:text-sm "
                      onClick={onClose}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden relative w-64 h-64 sm:flex items-center justify-center">
              <svg className="w-full h-full">
                <defs>
                  <path
                    id="leafPath"
                    d="M70 80 Q 95 10 130 80 L 100 105 L 70 80 z"
                  />
                </defs>
                <use href="#leafPath" fill="#2c3e50" />
                <use
                  href="#leafPath"
                  fillOpacity="0"
                  stroke="#27ae60"
                  strokeWidth="3"
                  strokeDasharray="15 20"
                  strokeDashoffset="0"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-135"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </use>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#2c3e50"
                  >
                    <path
                      d="M16.4,2c-0.7,0-1.4,0.2-2,0.7l-0.9,0.9l-2.6-2.6l0.9-0.9c1.2-1.2,3.1-1.2,4.2,0l3.4,3.4c1.2,1.2,1.2,3.1,0,4.2
                      l-8.2,8.2c-0.6,0.6-1.4,1-2.2,1c-0.8,0-1.5-0.3-2.1-0.9l-3.4-3.4c-1.2-1.2-1.2-3.1,0-4.2l8.3-8.3C15,2.2,15.7,2,16.4,2z M8.6,15.6
                      l6.9-6.9l1.8,1.8l-6.9,6.9L8.6,15.6z M5.8,12.7l-1.6,1.6c-0.3,0.3-0.3,0.8,0,1.1l3.4,3.4c0.3,0.3,0.8,0.3,1.1,0l1.6-1.6L5.8,12.7z
                      M13.1,5.4l-1.8-1.8l1.6-1.6c0.3-0.3,0.3-0.8,0-1.1L11.5,0c"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
