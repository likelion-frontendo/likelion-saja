import React from "react";
import {Product, useProducts} from "@/components";

export function UseProductList() {
  const {isLoadingState, productsState} = useProducts();

  if (isLoadingState) {
    return <div role="alert">로딩 중...</div>;
  }

  return (
    <div className="productContainer">
      {productsState.map((product, index) => (
        <Product key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} />
      ))}
    </div>
  );
}
