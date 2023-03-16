import React from "react";
import BannerImg from "@/assets/lineBanner.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";

export function LineBanner() {
  return (
    <StyledLineBanner>
      <Link to="/">
        <img src={BannerImg} alt="비즈프로필 만들기 라인 배너" />
      </Link>
    </StyledLineBanner>
  );
}

const StyledLineBanner = styled.div`
  margin: 0 auto;

  & img {
    margin: 0 auto;
    display: block;
    width: 1056px;
    height: 169px;
  }
`;
