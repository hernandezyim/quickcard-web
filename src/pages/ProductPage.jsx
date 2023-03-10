import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveProduct } from '../actions/product'
import EdictProductModal from '../components/product/EdictProductModal'
import ProductGrid from '../components/product/ProductGrid'
import Button from '../components/ui/Button'
import FloatButtonScrollTop from '../components/ui/FloatButtonScrollTop'
import LoadingScreen from '../components/ui/LoadingScreen'
import PaginateButtons from '../components/ui/PaginateButtons'
import Table from '../components/ui/Table'
import usePageTitle from '../hooks/usePageTitle'
import usePagination from '../hooks/usePagination'
import startDeleteProduct from '../services/product/startDeleteProduct'
import startGetProducts from '../services/product/startGetProducts'

const LIMIT = 10
export default function ProductPage() {
  const dispatch = useDispatch()
  const { product, ui } = useSelector((state) => state)
  const { products } = product
  const { loading } = ui

  const { onNext, onPrev, onJump, currentData, currentPage, pages } =
    usePagination(products, LIMIT)

  const [activeModal, setActiveModal] = useState(false)
  usePageTitle()

  const onRefresh = () => startGetProducts()

  const onUpdate = (product) => {
    dispatch(setActiveProduct(product))
    setActiveModal(true)
  }

  const onClose = () => setActiveModal(false)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(startGetProducts())
    }
  }, [dispatch])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className="flex justify-end mx-6 mt-2">
        <Button onClick={onRefresh} disabled={loading}>
          Refresh
        </Button>
      </div>
      <div className="bg-slate-100">
        {activeModal && <EdictProductModal onClose={onClose} />}
        <div className="md:hidden m-6">
          <ProductGrid products={currentData} />
        </div>
        <div className="hidden md:flex mt-2  justify-end mx-6">
          <Button onClick={onUpdate}>Agregar producto</Button>
        </div>
        <Table
          titles={['Nombre', 'Cantidad', 'Precio']}
          valuesTitles={['name', 'quantity', 'price']}
          items={currentData}
          onUpdate={onUpdate}
          onDelete={startDeleteProduct}
        />
        <PaginateButtons
          currentPage={currentPage}
          pages={pages}
          onNext={onNext}
          onPrev={onPrev}
          onJump={onJump}
        />
        <button
          onClick={onUpdate}
          className="md:hidden fixed bottom-20 right-4 bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <FloatButtonScrollTop />
      </div>
    </>
  )
}
