import React from "react";
import styled from "styled-components";
import test from "@/assets/test.jpg";
import {Link} from "react-router-dom";

export function Store() {
  return (
    <StyledStoreContainer>
      <div className="storeInner">
        <Link to="/">
          <img src={test} alt="상품 이미지"></img>
        </Link>
        <div className="storeContainer">
          <div className="storeInfo">
            <span className="title">임은하푸드 인천창고</span>
            <span className="location">천곡동</span>
          </div>
          <span className="description">
            임은하푸드는 전국에 수산물 창고를 둔 곳입니다. 매일 아침 창고 소식을 전해요. 단골맺기를 하시면 소식 알람이 간답니다. 꼭 저희에게 구매하지 않더라도, 시장가시기 전에 그 날 시세 보시면 좋을
            거에요. 간혹
          </span>
          <div className="storeExtraInfo">
            <span>후기 1,713</span>
            <span>단골 26,497</span>
            <span>수산물</span>
          </div>
        </div>
      </div>
    </StyledStoreContainer>
  );
}

const StyledStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  border-bottom: 1px solid #eaebee;

  .storeInner {
    display: flex;
    flex-direction: row;
    height: 125px;
    padding: 16px;
    gap: 16px;
    margin: 8px 0;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    object-fit: cover;
  }

  .storeContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .storeInfo {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #212124;
  }

  .location {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #868b94;
  }

  .description {
    display: -webkit-box;
    overflow: hidden;
    width: 240px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    word-break: break-all;
    color: #212124;
  }

  .storeExtraInfo {
    display: flex;
    flex-direction: row;
    gap: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.008px;
    line-height: 20px;
    color: #868b94;
  }
`;
