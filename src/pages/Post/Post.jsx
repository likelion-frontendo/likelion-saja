import {Header, Footer} from "@/components";
import {PostSection} from "@/pages/Post";
import {Helmet} from "react-helmet-async";
import styled from "styled-components/macro";

export function Post() {
  return (
    <Wrap>
      <Helmet>
        <title>사자-게시물작성</title>
        <meta name="description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
        <meta name="keywords" content="중고거래, 당근마켓, 멋쟁이사자처럼, 멋쟁이사자처럼프론트엔드" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="사자마켓" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:title" content="사자마켓 게시물작성" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
      </Helmet>
      <Header></Header>
      <PostSection></PostSection>
      <Footer></Footer>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1056px;
  margin: 120px auto 0 auto;
`;
