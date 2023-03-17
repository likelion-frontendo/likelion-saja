import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import BannerImg from "@/assets/Home/lineBanner.svg";

export function LineBanner() {
  return (
    <StyledLineBanner>
      <Link to="/">
        <img src={BannerImg} alt="우리동네 알바찾기 라인 배너" />
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
