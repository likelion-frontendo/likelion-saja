import {RegisterForm, RegisterTerms} from "@/pages/Register";
import {Header, Footer, Heading2, Button} from "@/components";
import {Helmet} from "react-helmet-async";
import styled from "styled-components";

export function Register() {
  return (
    <>
      <Helmet>
        <title>사자-회원가입</title>
        <meta name="description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
        <meta name="keywords" content="중고거래, 당근마켓, 멋쟁이사자처럼, 멋쟁이사자처럼프론트엔드" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="사자마켓" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:title" content="사자마켓 회원가입" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.pinimg.com/originals/b9/7e/7f/b97e7fcf01f683802fa0ebb51d05b696.jpg" />
        <meta property="og:description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
      </Helmet>
      <Header></Header>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation">
          <sup>*</sup>필수입력사항
        </p>
        <RegisterForm />
        <RegisterTerms />
        <Button className="registerButton">가입하기</Button>
      </StyledMain>
      <Footer></Footer>
    </>
  );
}

const StyledMain = styled.main`
  width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    margin: 100px 0 40px 0;
  }

  & .registerInformation {
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    width: 640px;
    margin-bottom: 4px;
    padding: 4px;
  }

  & .registerInformation > sup {
    color: red;
    font-size: 16px;
    position: relative;
    top: -4px;
    left: -4px;
  }

  & > button {
    width: 333px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #6c816d;
    border: 1px solid #6c816d;
    color: #fff;
    cursor: pointer;
    margin: 40px 0 80px 0;
  }
`;
