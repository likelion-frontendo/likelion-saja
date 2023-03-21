import React from "react";
import {Product, useProducts} from "@/components";

export function UseProductList(props) {
  const {isLoadingState, productsState} = useProducts();

  if (isLoadingState) {
    return <div role="alert">로딩 중...</div>;
  }

  const slicedProducts = productsState.slice(0, props.count); // 0부터 7까지의 요소를 가지는 새로운 배열을 생성

  return (
    <div className="productContainer">
      {slicedProducts.map((product, index) => (
        <Product key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} />
      ))}
    </div>
  );
}
