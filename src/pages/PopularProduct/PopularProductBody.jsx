import {UseProductList} from "@/components";
import styled from "styled-components";

export function PopularProductBody() {
  return (
    <StyledPopularProduct>
      <div className="PopularProductTitle">중고거래 인기매물</div>
      <UseProductList />
    </StyledPopularProduct>
  );
}

const StyledPopularProduct = styled.div`
  margin: 140px auto;
  width: 1024px;

  & .PopularProductTitle {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
  }

  & .productContainer {
    display: flex;
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }
`;
