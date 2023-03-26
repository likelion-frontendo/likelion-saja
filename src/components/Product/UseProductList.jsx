import React, {useState, useEffect} from "react";
import {Product, useProducts} from "@/components";
import raccoon from "@/assets/Logo/raccoon.gif";
import styled from "styled-components";

export function UseProductList(props) {
  const {isLoadingState, productsState} = useProducts();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoadingState || showLoading) {
    return (
      <StyledLoadingImgContainer role="alert">
        <img src={raccoon} alt="로딩 중임..." />
      </StyledLoadingImgContainer>
    );
  }

  const slicedProducts = productsState.slice(0, props.count);

  return (
    <div className="productContainer">
      {slicedProducts.map((product, index) => (
        <Product key={index} id={product.id} imgUrl={product.imgUrl} title={product.title} price={product.price} location={product.location} />
      ))}
    </div>
  );
}

const StyledLoadingImgContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;

  & img {
    border-radius: 10%;
  }
`;
