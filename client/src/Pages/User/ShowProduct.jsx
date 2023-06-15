import React, { useEffect, useState } from "react";
import ShowProductComponent from "../../Components/ui/ShowProduct";
import Loading from "../Loading";
import { useNavigate, useParams } from "react-router";
import products from "../.../../../data/products";
//import { useSearchParams } from "react-router-dom";

export default function ShowProduct() {
  const navigate = useNavigate();
  //const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const productKey = Object.keys(products).find(
    (key) => +key === +id
  );
  // const params = [];
  // searchParams.forEach((value, key) => (params[key] = value));
  // console.log(params);

  useEffect(() => {
    if (!products[productKey]) {
      navigate("/error404", { replace: true });
    } else {
      setLoading(false);
    }
  }, [navigate, productKey]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-5/6 md:w-[93%] lg:w-[95%] xl:w-5/6 flex flex-col gap-10 pb-10">
          <ShowProductComponent
            product={products[productKey]}
            id={productKey}
          />
        </div>
      )}
    </>
  );
}
