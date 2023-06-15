import React from 'react'
import Sidebar from '../../Components/ui/Sidebar/Sidebar';
import ProductsComponents from "../../Components/ui/Products";

export default function Products() {
  return (
    <div className="w-5/6 flex flex-col-reverse md:flex-row gap-10">
      <Sidebar />
      <main className="w-full md:w-3/4">
        <ProductsComponents />
      </main>
    </div>
  );
}
 