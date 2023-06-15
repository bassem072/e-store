import React from 'react'
import ProductOverview from './ProductOverview'
import ProductDescription from './ProductDescription'

export default function ProductContent({ product, id }) {
  return (
    <div className='flex flex-col gap-20'>
      <ProductOverview product={product} id={id} />
      <ProductDescription product={product} id={id} />
    </div>
  )
}
