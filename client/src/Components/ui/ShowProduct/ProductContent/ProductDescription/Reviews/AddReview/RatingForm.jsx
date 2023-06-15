import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RatingForm({ product, id }) {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="w-full pt-5">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex gap-5">
          <div className="text-lg font-bold">Your Rating</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <button key={item} onClick={() => setRate(item)} className="outline-none">
                  {rate > 0 ? (
                    item <= rate ? (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#FF7513]"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-slate-300"
                      />
                    )
                  ) : item <= product.rate ? (
                    <FontAwesomeIcon icon={faStar} className="text-[#FF7513]" />
                  ) : (
                    <FontAwesomeIcon icon={faStar} className="text-slate-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col items-end gap-5">
          <textarea
            name="review"
            placeholder="Your review *"
            value={review}
            className="w-full h-[300px] p-5 resize-none outline-none bg-slate-100 rounded-2xl"
            onChange={(e) => setReview(e.currentTarget.value)}
          ></textarea>
          <button className="px-16 py-3 bg-primary rounded-full text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
