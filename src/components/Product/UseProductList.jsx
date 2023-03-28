import React, {useEffect} from "react";
import {Product, useProducts, Image} from "@/components";
import raccoon from "@/assets/Logo/raccoon.gif";
import styled from "styled-components";
import {atom, useRecoilState} from "recoil";

const showLoadingAtom = atom({
  key: "showLoadingPopularRaccoon",
  default: true,
});

export function UseProductList(props) {
  const {isLoadingState, productsState} = useProducts(props.excludeId, props.count);
  const [showLoading, setShowLoading] = useRecoilState(showLoadingAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setShowLoading]);

  if (isLoadingState || showLoading) {
    return (
      <StyledLoadingImgContainer role="alert">
        <Image src={raccoon} alt="로딩 중임..." />
      </StyledLoadingImgContainer>
    );
  }

  return (
    <div className="productContainer">
      {productsState.map((product, index) => (
        <Product key={index} id={product.id} product={product} />
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
