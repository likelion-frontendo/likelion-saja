import React from "react";
import {useProducts} from "@/components";
import {ProductDetailBody} from "@/pages/ProductDetail/ProductDetailBody";

export function UseProductDetail(props) {
  const {isLoading, productsState} = useProducts();
  if (isLoading) {
    return <div role="alert">로딩 중...</div>;
  }

  const product = productsState.find((p) => p.id === props.id);

  return (
    <div className="imgContainer">
      <ProductDetailBody id={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} description={product.description} />
    </div>
  );
}
