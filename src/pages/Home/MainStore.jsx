import React from "react";
import styled from "styled-components";
import {Store} from "@/pages/Home/Store";

export function MainStore() {
  return (
    <StyledStore>
      <div className="inner">
        <h2>다양한 동네 가게를 볼 수 있어요</h2>
        <div className="storeButtons">
          <button aria-label="전체">전체</button>
          <button aria-label="식당">식당</button>
          <button aria-label="카페">카페</button>
          <button aria-label="용달/이사">용달/이사</button>
          <button aria-label="뷰티/미용">뷰티/미용</button>
          <button aria-label="헬스/필라테스/요가">헬스/필라테스/요가</button>
        </div>
        <div className="storeList">
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
        </div>
      </div>
    </StyledStore>
  );
}

const StyledStore = styled.div`
  margin-bottom: 80px;

  & .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  & h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #212124;
  }

  & .storeButtons {
    display: flex;
    margin-top: 40px;
    gap: 8px;
    justify-content: center;
  }

  & button {
    padding: 8px 18px 10px;
    background-color: white;
    height: 38px;
    border: 1px solid #eaebee;
    border-radius: 100px;
  }

  & .storeList {
    width: 768px;
    margin: 10px auto 0;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    justify-items: center;
  }
`;
