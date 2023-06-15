import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <div>{searchParams.get("category")}</div>
      <div>{searchParams.get("brand")}</div>
      <div>{searchParams.get("search")}</div>
    </div>
  )
}
