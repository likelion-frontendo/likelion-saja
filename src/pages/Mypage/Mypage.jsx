import {SidebarTop, Section} from "@/pages/Mypage/";
import {Header, Footer, UpButton} from "@/components";
import {Helmet} from "react-helmet-async";
import styled from "styled-components/macro";

export function Mypage() {
  return (
    <Wrap>
      <Helmet>
        <title>사자 - 마이페이지</title>
        <meta name="description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
        <meta name="keywords" content="중고거래, 당근마켓, 멋쟁이사자처럼, 멋쟁이사자처럼프론트엔드" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="사자마켓" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:title" content="사자마켓 마이페이지" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
      </Helmet>
      <Header></Header>
      <div>
        <SidebarTop></SidebarTop>
        <Section></Section>
        <UpButton></UpButton>
      </div>
      <Footer></Footer>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1056px;
  margin: 120px auto 0 auto;

  & > div {
    display: flex;
    margin-bottom: 80px;
  }

  & .ListTitle {
    height: 60px;
    background-color: #f8e1db;
    color: #6c816d;
    font-weight: 500;
  }

  & .ListTitle span {
    margin-left: 24px;
    line-height: 60px;
  }
`;
