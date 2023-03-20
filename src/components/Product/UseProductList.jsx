import React from "react";
import {Product, useProducts} from "@/components";

export function UseProductList() {
  const {isLoading, products} = useProducts();

  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  return (
    <div className="productContainer">
      {products.map((product, index) => (
        <Product key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} />
      ))}
    </div>
  );
}
