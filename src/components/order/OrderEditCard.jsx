import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateItem, removeItem } from '../../actions/order'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import LoadingScreen from '../ui/LoadingScreen'

export default function OrderEditCard({ product, quantity }) {
  const { _id, name, price } = product

  const [_quantity, setQuantity] = useState(quantity)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.ui)
  const handleRemove = () => dispatch(removeItem(_id))

  const subtotal = _quantity * price

  const handleQuantityIncrease = () => {
    if (_quantity < 10) {
      setQuantity(_quantity + 1)
    }
  }

  const handleQuantityDecrease = () => {
    if (_quantity > 1) {
      setQuantity(_quantity - 1)
    }
  }

  useEffect(() => {
    if (_quantity === quantity) return
    dispatch(
      updateItem({
        _id,
        quantity: _quantity,
      })
    )
  }, [_quantity])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="bg-white rounded-lg shadow-md p-4 divide-y sm:w-2/3 md:w-1/2  mx-auto mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <button
            onClick={handleRemove}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            <RiDeleteBin5Fill />
          </button>
        </div>

        <div className="flex items-center justify-between py-2 ">
          <span className="italic mr-4">Cantidad: </span>
          <div>
            <button
              onClick={handleQuantityDecrease}
              className="bg-gray-300 px-2 py-1 rounded-sm"
            >
              -
            </button>
            <span className="mx-2">{_quantity}</span>
            <button
              onClick={handleQuantityIncrease}
              className="bg-gray-300 px-2 py-1 rounded-sm"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <p className="italic">Subtotal:</p>
          <p className="italic">${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}
