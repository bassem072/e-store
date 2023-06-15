import React from 'react'
import ProductContent from './ProductContent'
import RelatedProducts from './RelatedProducts';

export default function ShowProduct({ product, id }) {
  return (
    <div className="w-full flex flex-col gap-20">
      <ProductContent product={product} id={id} />
      <RelatedProducts id={id} />
    </div>
  );
}
