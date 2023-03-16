import React from "react";
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper";
import {Link} from "react-router-dom";
import BannerImg from "@/assets/banner01.svg";

export function MainBanner() {
  return (
    <StyledBanner>
      <Swiper modules={[Autoplay]} autoplay={({speed: 500}, {disableOnInteraction: false})}>
        <SwiperSlide>
          <img src={BannerImg} alt="동네가게 바로가기 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImg} alt="동네가게 바로가기 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImg} alt="동네가게 바로가기 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImg} alt="동네가게 바로가기 배너" />
        </SwiperSlide>
      </Swiper>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  width: clamp(1040px, 100%, 1920px);
  margin: 80px auto;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
