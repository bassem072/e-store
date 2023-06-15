import React from 'react'
import categories from "../../../../../../data/categories";

export default function Description({ product }) {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className='text-4xl font-black'>{product.name}</div>
      <div className='font-medium'>{categories[product.category].name}</div>
      <div className='text-lg text-slate-500'>{product.description.repeat(10)}</div>
    </div>
  );
}
