import React from "react";
import styled from "styled-components";
import Product from "@/components/Product";

function MainProduct() {
  return (
    <StyledProduct>
      <div className="inner">
        <h2>중고거래 인기 매물</h2>
        <div className="product-container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <a href="">
          <span className="popular-product">인기매물 더 보기</span>
        </a>
      </div>
    </StyledProduct>
  );
}

export default MainProduct;

const StyledProduct = styled.div`
  .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    align-items: center;
    text-align: center;
    color: #212529;
  }

  .product-container {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  .popular-product {
    margin-top: 55px;
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    text-decoration-line: underline;
    color: #212529;
  }
`;
