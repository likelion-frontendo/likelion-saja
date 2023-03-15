import React from "react";
import BannerImg from "@/assets/banner01.svg";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";

function MainBanner() {
  return (
    <StyledBanner>
      <Swiper>
        <SwiperSlide>
          <a href="">
            <img src={BannerImg} alt="동네가게 바로가기 배너" />
          </a>
        </SwiperSlide>
      </Swiper>
    </StyledBanner>
  );
}

export default MainBanner;

const StyledBanner = styled.div`
  width: clamp(1040px, 100%, 1920px);
  margin: 80px auto;
`;
