import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FloatButtonScrollTop from '../components/ui/FloatButtonScrollTop'
import Table from '../components/ui/Table'
import startDeleteOrder from '../services/order/startDeleteOrder'
import LoadingScreen from '../components/ui/LoadingScreen'
import startGetOrderAll from '../services/order/startGetOrderALL'
import Grid from '../components/ui/Grid'
import OrderCard from '../components/order/OrderCard'
import usePagination from '../hooks/usePagination'
import { useNavigate } from 'react-router-dom'
import { setActiveOrder } from '../actions/order'
import PaginateButtons from '../components/ui/PaginateButtons'
import Button from '../components/ui/Button'
import usePageTitle from '../hooks/usePageTitle'

const INITIAL_PAGE = 1
const LIMIT = 10

export default function OrderPage() {
  const { order, ui } = useSelector((state) => state)
  const { orders } = order
  const { loading } = ui

  const { onNext, onPrev, onJump, currentData, currentPage, pages } =
    usePagination(orders, LIMIT)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  usePageTitle()

  const onRefresh = () => dispatch(startGetOrderAll())

  const onUpdate = (order) => {
    dispatch(setActiveOrder(order))
    navigate('/card')
  }

  const onDelete = (id) => dispatch(startDeleteOrder(id))

  useEffect(() => {
    dispatch(startGetOrderAll())
  }, [])

  useEffect(() => {
    if (currentPage - 1 < Math.ceil(orders.length / LIMIT)) return
    dispatch(startGetOrderAll(currentPage))
  }, [currentPage])

  return (
    <>
      {loading && <LoadingScreen />}
      <div>
        <div className="flex justify-end mx-6 mt-2">
          <Button onClick={onRefresh} disabled={loading}>
            Refresh
          </Button>
        </div>
        <div className="md:hidden m-5">
          <Grid items={currentData}>
            {({ item }) => <OrderCard order={item} />}
          </Grid>
        </div>
        <Table
          titles={['Fecha', 'Cliente', 'Total']}
          valuesTitles={['createdAt', 'name', 'total']}
          items={currentData}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <PaginateButtons
          currentPage={currentPage}
          pages={pages}
          onNext={onNext}
          onPrev={onPrev}
          onJump={onJump}
        />
        <FloatButtonScrollTop />
      </div>
    </>
  )
}
