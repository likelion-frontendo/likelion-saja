import styled from "styled-components/macro";
import {SidebarTop, Section} from "@/pages/Mypage/";

export function Mypage() {
  return (
    <Wrap>
      <SidebarTop></SidebarTop>
      <Section></Section>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 1056px;
  height: 1558px;
  margin: 60px auto 0 auto;
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
