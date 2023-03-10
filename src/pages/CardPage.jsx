import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiStore } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import startAddOrder from '../services/order/startAddOrder'
import FloatButtonScrollTop from '../components/ui/FloatButtonScrollTop'
import startUpdateOrder from '../services/order/startUpdateOrder'
import { removeActiveOrder } from '../actions/order'
import OrderEditCard from '../components/order/OrderEditCard'
import Button from '../components/ui/Button'
import usePageTitle from '../hooks/usePageTitle'

export default function CardPage() {
  const { order, ui, auth } = useSelector((state) => state)
  const { activeOrder } = order
  const [orderTotal, setOrderTotal] = useState(0)
  const { loading } = ui
  const { id } = auth

  const dispatch = useDispatch()
  usePageTitle()

  const firstRender = useRef(false)

  useEffect(() => {
    const total = activeOrder.items.reduce((accumulator, item) => {
      return item.quantity * item.product.price + accumulator
    }, 0)

    setOrderTotal(total)
  }, [activeOrder.items])

  const isUpdate = activeOrder?._id

  const onBuy = () => {
    activeOrder.total = orderTotal
    if (isUpdate) {
      dispatch(startUpdateOrder(activeOrder, activeOrder._id))
    } else
      dispatch(
        startAddOrder({
          items: activeOrder.items.map((item) => ({
            product: item.product,
            quantity: item.quantity,
          })),
          uid: id,
        })
      )
  }
  useEffect(() => {
    if (firstRender.current) {
      return () => {
        dispatch(removeActiveOrder())
      }
    }
    firstRender.current = true
  }, [])
  return (
    <div className="px-4 py-8">
      {activeOrder.items.length > 0 ? (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Total de la orden: ${orderTotal}
          </h1>
          <div className="flex justify-end">
            <Button type="submit" disabled={loading} onClick={onBuy}>
              {isUpdate ? 'Actualizar orden' : 'Realizar la comprar'}
            </Button>
          </div>
          <div>
            {activeOrder.items.map((item, index) => (
              <OrderEditCard key={index} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-red-500 text-center mb-4 text-2xl italic font-bold">
            No hay elementos en la orden
          </p>
          <Button>
            <Link to="/shop">
              Ir a la tienda <BiStore className="inline-block" />
            </Link>
          </Button>
        </div>
      )}
      <FloatButtonScrollTop />
    </div>
  )
}
