import React from 'react'
import RatingForm from './RatingForm';

export default function AddReview({ product, id }) {
  return (
    <div className="w-full flex flex-col gap-7">
      <div className="text-4xl font-bold">Add a review</div>
      <div className="text-slate-400 font-medium">
        Your email address will not be published. Required fields are marked *
      </div>
      <RatingForm product={product} id={id} />
    </div>
  );
}
