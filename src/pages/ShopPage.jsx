import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductBuy from '../components/product/ProductBuy'
import FloatButtonScrollTop from '../components/ui/FloatButtonScrollTop'
import usePageTitle from '../hooks/usePageTitle'
import startGetProducts from '../services/product/startGetProducts'

export default function ShopPage() {
  const { order, product } = useSelector((state) => state)
  const dispatch = useDispatch()
  usePageTitle()

  const { products } = product
  const { activeOrder } = order

  useEffect(() => {
    dispatch(startGetProducts())
  }, [])

  return (
    <div className="mt-4 flex flex-wrap sm:mt-4 justify-center">
      {products
        .filter((product) =>
          activeOrder.items.every((item) => item.product._id !== product._id)
        )
        .map((product, index) => (
          <ProductBuy key={product._id + index} product={product} />
        ))}
      <FloatButtonScrollTop />
    </div>
  )
}
