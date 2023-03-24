import React from "react";
import {Product, useProducts} from "@/components";

export function UseProductList(props) {
  const {isLoading, productsState} = useProducts();

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  const slicedProducts = productsState.slice(0, props.count);

  return (
    <div className="productContainer">
      {slicedProducts.map((product, index) => (
        <Product key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} />
      ))}
    </div>
  );
}
