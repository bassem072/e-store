import React, { useState } from "react";
import Item from "./Item";
import Description from "./Description";
import AdditionalInformation from "./AdditionalInformation";
import Reviews from "./Reviews";

export default function ProductDescription({ product, id }) {
  const [index, setIndex] = useState(0);
  const selectedComponent = [
    <Description product={product} />,
    <AdditionalInformation product={product} />,
    <Reviews product={product} id={id} />,
  ];

  return (
    <div className="w-full">
      <div className="h-20 w-full bg-[#292936] rounded-t-2xl px-14 flex items-center gap-10">
        <Item
          index={0}
          selected={index}
          fn={() => {
            setIndex(0);
          }}
        >
          <>
            <div>Description</div>
          </>
        </Item>
        <div className="h-8 w-px bg-slate-500"></div>
        <Item
          index={1}
          selected={index}
          fn={() => {
            setIndex(1);
          }}
        >
          <>
            <div>Additional Information</div>
          </>
        </Item>
        <div className="h-8 w-px bg-slate-500"></div>
        <Item
          index={2}
          selected={index}
          fn={() => {
            setIndex(2);
          }}
        >
          <>
            <div>Reviews</div>
            <div className="h-6 w-6 bg-zinc-700 rounded-full flex justify-center items-center text-sm text-slate-400 font-semibold">
              7
            </div>
          </>
        </Item>
      </div>
      <div className="h-fit w-full border-[1px] border-slate-300 rounded-b-2xl py-20 px-28">
        {selectedComponent[index]}
      </div>
    </div>
  );
}
