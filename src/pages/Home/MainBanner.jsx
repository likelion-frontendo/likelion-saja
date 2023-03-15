import React from "react";
import BannerImg from "@/assets/banner01.svg";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";

export function MainBanner() {
  return (
    <StyledBanner>
      <Swiper>
        <SwiperSlide>
          <Link to="/">
            <img src={BannerImg} alt="동네가게 바로가기 배너" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  width: clamp(1040px, 100%, 1920px);
  margin: 80px auto;
`;
