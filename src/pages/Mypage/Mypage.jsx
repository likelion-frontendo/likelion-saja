import {SidebarTop} from "@/pages/Mypage/SidebarTop";
import styled from "styled-components/macro";

export function Mypage() {
  return (
    <Wrap>
      <SidebarTop></SidebarTop>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1056px;
  height: 100vh;
  margin: 60px auto 0 auto;
  background-color: lightpink;
`;
