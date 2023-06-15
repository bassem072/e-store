import React from 'react'
import AddReview from './AddReview'
import ShowReviews from './ShowReviews'
import brands from '../../../../../../data/brands'

export default function Reviews({ product, id }) {
  return (
    <div className='w-full flex flex-col gap-10'>
      <AddReview product={product} id={id} />
      <div className='h-px w-full bg-slate-300'></div>
      <ShowReviews id={id} name={product.name} brand={brands[product.brand].name} />
    </div>
  )
}
