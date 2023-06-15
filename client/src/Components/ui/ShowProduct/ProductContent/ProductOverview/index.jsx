import React from 'react'
import ProductImage from './ProductImages'
import ProductDetails from './ProductDetails'

export default function ProductOverview({ product, id }) {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        <ProductImage images={product.images} />
        <ProductDetails product={product} id={id} />
    </div>
  )
}
