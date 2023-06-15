import React from 'react';
import ReviewList from './ReviewList';
import reviews from "../../../../../../../data/reviews";

export default function ShowReviews({ id, name, brand }) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className='text-3xl font-semibold'>{reviews.length} Reviews For {name}</div>
      <ReviewList id={id} brand={brand} />
    </div>
  );
}
