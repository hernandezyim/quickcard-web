import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeActiveProduct, setActiveProduct } from '../../actions/product'
import startDeleteProduct from '../../services/product/startDeleteProduct'
import Card from '../ui/Card'
import EdictProductModal from './EdictProductModal'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [openEdit, setOpenEdit] = useState(false)

  const onEdit = () => {
    dispatch(setActiveProduct(product))
    setOpenEdit(true)
  }

  const onClose = () => {
    dispatch(removeActiveProduct())
    setOpenEdit(false)
  }
  const onDelete = () => dispatch(startDeleteProduct(product._id))

  return (
    <>
      {openEdit && <EdictProductModal onClose={onClose} />}
      <Card
        item={product}
        titles={['Nombre', 'Cantidad', 'Precio']}
        values={['name', 'quantity', 'price']}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  )
}

export default ProductCard
