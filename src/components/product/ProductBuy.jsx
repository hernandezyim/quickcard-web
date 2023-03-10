import { useDispatch } from 'react-redux'
import { setItem } from '../../actions/order'
import Button from '../ui/Button'

export default function ProductBuy({ product }) {
  const dispatch = useDispatch()

  const onBuy = () => {
    dispatch(setItem(product))
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full mx-10 mb-3 sm:w-2/3 md:w-1/4 flex-wrap justify-start">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-700">${product.price} USD</p>
      </div>
      <div className="flex items-center justify-end">
        <Button onClick={onBuy}>Añadir al carrito</Button>
      </div>
    </div>
  )
}
