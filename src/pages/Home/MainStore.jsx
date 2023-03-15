import React from "react";
import styled from "styled-components";

function MainStore() {
  return (
    <StyledStore>
      <div className="inner">
        <h2>다양한 동네 가게를 볼 수 있어요</h2>
        <div className="storeButtons">
          <button>전체</button>
          <button>식당</button>
          <button>카페</button>
          <button>용달/이사</button>
          <button>뷰티/미용</button>
          <button>헬스/필라테스/요가</button>
        </div>
        <div className="storeContainer"></div>
      </div>
    </StyledStore>
  );
}

export default MainStore;

const StyledStore = styled.div`
  .inner {
    margin: 65px auto 85px;
    width: 1056px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #212124;
  }

  .storeButtons {
    display: flex;
    margin-top: 40px;
    gap: 8px;
    justify-content: center;
  }

  button {
    padding: 8px 18px 10px;
    background-color: white;
    height: 38px;
    border: 1px solid #eaebee;
    border-radius: 100px;
  }

  .storeContainer {
    margin-top: 85px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;
    justify-items: center;
  }
`;
