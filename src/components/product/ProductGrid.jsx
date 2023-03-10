import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  return (
    <div className="">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}
