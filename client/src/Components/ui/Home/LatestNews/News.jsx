import React from "react";

export default function News({ item }) {
  return (
    <div className="group w-full h-[400px] flex flex-col overflow-hidden rounded-3xl border-4 border-transparent hover:border-primary transition-all duration-500">
      <div className="h-1/2 w-full">
        <img src={item} alt="x" className="h-full w-full object-cover" />
      </div>
      <div className="h-1/2 flex justify-center items-center">
        <div className="w-[70%] flex flex-col gap-3">
          <div className="text-primary text-lg font-semibold">
            October 28, 2020
          </div>
          <div className="text-lg text-slate-400 group-hover:text-black font-medium leading-6 max-h-[4.5rem] overflow-ellipsis overflow-hidden transition-all duration-500">
            When, while the lovely valley teems with vapor around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary.
          </div>
        </div>
      </div>
    </div>
  );
}
