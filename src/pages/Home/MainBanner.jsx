import React from "react";
import styled from "styled-components";
import {Image} from "@/components";
import BannerImg from "@/assets/Home/mainBanner1.png";
import BannerImg2 from "@/assets/Home/mainBanner2.png";
import BannerImg3 from "@/assets/Home/mainBanner3.png";
import BannerImg4 from "@/assets/Home/mainBanner4.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";

export function MainBanner() {
  return (
    <StyledBanner>
      <Swiper modules={[Autoplay]} autoplay={({speed: 500}, {disableOnInteraction: false})} loop={true}>
        <SwiperSlide>
          <Image src={BannerImg} alt="동네가게 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BannerImg2} alt="당근 알바 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BannerImg3} alt="부동산 직거래 배너" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BannerImg4} alt="중고차 직거래 배너" />
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
