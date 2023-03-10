import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setActiveOrder } from '../../actions/order'
import startDeleteOrder from '../../services/order/startDeleteOrder'
import Card from '../ui/Card'

export default function OrderCard({ order }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onEdit = () => {
    navigate('/card')
    dispatch(setActiveOrder(order))
  }

  const onDelete = () => dispatch(startDeleteOrder(order._id))

  return (
    <Card
      item={order}
      titles={['Fecha', 'Cliente', 'Total']}
      values={['createdAt', 'name', 'total']}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  )
}
