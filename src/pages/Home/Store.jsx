import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Image} from "@/components";

export function Store(props) {
  return (
    <StyledStoreContainer>
      <div className="storeInner">
        <Link to="/">
          <Image src={props.store.imgUrl} alt="상품 이미지"></Image>
        </Link>
        <div className="storeContainer">
          <div className="storeInfo">
            <span className="title">{props.store.title}</span>
            <span className="location">{props.store.location}</span>
          </div>
          <span className="description">{props.store.description}</span>
          <div className="storeExtraInfo">
            <span>후기 {props.store.review.toLocaleString(navigator.language)}</span>
            <span>단골 {props.store.regular.toLocaleString(navigator.language)}</span>
            <span>{props.store.type}</span>
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

  & .storeInner {
    display: flex;
    flex-direction: row;
    height: 125px;
    padding: 16px;
    gap: 16px;
    margin: 8px 0;
  }

  & img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    object-fit: cover;
  }

  & .storeContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & .storeInfo {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  & .title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #212124;
  }

  & .location {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #868b94;
  }

  & .description {
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

  & .storeExtraInfo {
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
