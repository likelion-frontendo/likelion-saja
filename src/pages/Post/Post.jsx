import styled from "styled-components/macro";
import {Header, Footer} from "@/components";
import {PostSection} from "@/pages/Post/PostSection";

export function Post() {
  return (
    <Wrap>
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
