import {SidebarTop, Section} from "@/pages/Mypage/";
import {Header, Footer} from "@/components";
import styled from "styled-components/macro";

export function Mypage() {
  return (
    <Wrap>
      <Header></Header>
      <div>
        <SidebarTop></SidebarTop>
        <Section></Section>
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
