import React from 'react'

export default function SidebarSection({ title, children }) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex gap-8 items-center">
        <p className="font-bold text-xl">{title}</p>
        <div className="h-px w-full bg-black/10"></div>
      </div>
      {children}
    </div>
  );
}
