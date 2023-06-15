import React from "react";
import color from "../../../../assets/images/clients/thumble.svg";
import white from "../../../../assets/images/clients/white-thumble.svg";

export default function Comment({ comment }) {
  return (
    <div className="group h-[300px] border-[3px] border-slate-200 hover:border-primary rounded-3xl flex justify-center items-center transition-all duration-500">
      <div className="w-[70%] flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="w-[70px] h-[50px] bg-[url('assets/images/clients/white-thumble.svg')] group-hover:bg-[url('assets/images/clients/thumble.svg')] bg-cover transition-all duration-500"></div>
          <div className="flex flex-col">
            <div className="text-xl text-primary group-hover:text-black font-bold transition-all duration-500">
              {comment.name}
            </div>
            <div className="text-lg text-secondary font-medium">
              {comment.role}
            </div>
          </div>
        </div>
        <div className="text-lg font-medium leading-6 max-h-[4.5rem] overflow-ellipsis overflow-hidden">
          {comment.content}
        </div>
      </div>
    </div>
  );
}
