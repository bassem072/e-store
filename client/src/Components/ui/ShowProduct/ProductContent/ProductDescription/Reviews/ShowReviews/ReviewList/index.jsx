import React from "react";
import reviews from "../../../../../../../../data/reviews";
import Review from "./Review";

export default function ReviewList({ id, brand }) {
  return (
    <div className="w-full flex flex-col gap-10">
      {
        reviews.map(review => <Review review={review} brand={brand} />)
      }
    </div>
  );
}
