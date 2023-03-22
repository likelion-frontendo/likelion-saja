import React from "react";
import {useProducts} from "@/components";
import {ProductDetailBody} from "@/pages/ProductDetail/ProductDetailBody";

export function UseProductDetail() {
  const {isLoadingState, productsState} = useProducts();
  if (isLoadingState) {
    return <div role="alert">로딩 중...</div>;
  }

  const slicedProducts = productsState.slice(0, 1);

  return (
    <div className="imgContainer">
      {slicedProducts.map((product, index) => (
        <ProductDetailBody key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} description={product.description} />
      ))}
    </div>
  );
}
