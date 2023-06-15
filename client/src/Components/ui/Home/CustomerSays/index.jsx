import React from "react";
import Comment from "./Comment";

export default function CustomerSays() {
  const comment = {
    id: 1,
    name: "Denis Zakerburg",
    role: "Marketing Management Remmi",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .",
  };
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center gap-3 whitespace-nowrap py-5 pb-10">
        <div className="text-3xl font-bold">Customer Says</div>
        <div className="w-full h-px bg-slate-300"></div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
        {[1, 2, 3].map(key => <Comment comment={comment} key={key} />)}
      </div>
    </div>
  );
}
