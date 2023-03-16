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
  height: 100vh;
  margin: 60px auto 0 auto;
  background-color: lightpink;
`;
