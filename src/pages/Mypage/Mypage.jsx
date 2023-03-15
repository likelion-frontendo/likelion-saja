import Sidebar from "@/pages/Mypage/SidebarTop";
import styled from "styled-components/macro";

function Mypage() {
  return (
    <Wrap>
      <Sidebar></Sidebar>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1056px;
  height: 100vh;
  margin: 60px auto 0 auto;
  background-color: lightpink;
`;
export {Mypage};
