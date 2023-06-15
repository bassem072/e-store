import React from 'react'

export default function Item({ index, selected, fn, children }) {
  return (
    <button
      className={
        "h-full flex items-center gap-3 text-xl font-medium border-b-[5px] transition-all duration-500" +
        (index === selected
          ? " text-white border-primary"
          : " text-slate-500 border-transparent")
      }
      onClick={fn}
    >
      {children}
    </button>
  );
}
