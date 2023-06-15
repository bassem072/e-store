import React from "react";
import avatar from "../../../../../../../../assets/images/others/avatar.png";
import company from "../../../../../../../../assets/images/others/company.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function Review({ review, brand }) {
  return (
    <div className="w-full flex flex-col items-end gap-5">
      <div className="w-full px-20 py-10 bg-slate-50 rounded-xl flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-5">
            <img
              src={avatar}
              alt="avatar"
              className="h-20 w-20 rounded-full overflow-hidden"
            />
            <div className="flex flex-col justify-center gap-2">
              <div className="text-xl font-bold">{review.username}</div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <div key={item}>
                      {item <= review.rate ? (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-[#FF7513]"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-slate-300"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="font-medium">{review.date}</div>
        </div>
        <div className="text-lg font-medium">{review.review}</div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <button>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-600 text-xl"
              />
            </button>
            <div className="text-slate-500">{review.likes}</div>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <FontAwesomeIcon
                icon={faThumbsDown}
                className="text-primary text-xl"
              />
            </button>
            <div className="text-slate-500">{review.dislikes}</div>
          </div>
        </div>
      </div>
      <div className="w-[90%] px-20 py-10 bg-slate-100 rounded-xl flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-5">
            <img
              src={company}
              alt="avatar"
              className="h-20 w-20 rounded-full overflow-hidden"
            />
            <div className="flex items-center text-xl font-bold">{brand}</div>
          </div>
          <div className="font-medium">{review.replay.date}</div>
        </div>
        <div className="text-lg font-medium">{review.replay.replay}</div>
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <button>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-600 text-xl"
              />
            </button>
            <div className="text-slate-500">{review.replay.likes}</div>
          </div>
          <div className="flex items-center gap-2">
            <button>
              <FontAwesomeIcon
                icon={faThumbsDown}
                className="text-primary text-xl"
              />
            </button>
            <div className="text-slate-500">{review.replay.dislikes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
