import styled from "styled-components";
import {UseProductList} from "@/components";
import {Link} from "react-router-dom";

export function MainProduct() {
  return (
    <StyledProduct>
      <div className="inner">
        <h2>중고거래 인기 매물</h2>
        <UseProductList />
        <Link to="/">
          <span className="popularProduct">인기매물 더 보기</span>
        </Link>
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  & .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    align-items: center;
    text-align: center;
    color: #212529;
  }

  & .productContainer {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }

  & .popularProduct {
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
