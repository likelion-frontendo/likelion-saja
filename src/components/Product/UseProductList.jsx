import React from "react";
import {Product, useProducts} from "@/components";

export function UseProductList(props) {
  const {isLoadingState, productsState} = useProducts();

  if (isLoadingState) {
    return <div role="alert">로딩 중...</div>;
  }

  const slicedProducts = productsState.slice(0, props.count);

  return (
    <div className="productContainer">
      {slicedProducts.map((product, index) => (
<<<<<<< HEAD
        <Product key={index} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} />
=======
        <Product key={index} id={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} interest={product.interest} />
>>>>>>> 49671ab7ca94c22bc30903cfba86181f2a1dc10a
      ))}
    </div>
  );
}
