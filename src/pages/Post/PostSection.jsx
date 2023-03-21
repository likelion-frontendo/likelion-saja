import {PostImage} from "@/pages/Post/PostImage";
import {PostText} from "@/pages/Post/PostText";
import styled from "styled-components/macro";

export function PostSection() {
  return (
    <Section>
      <h1>내 물건 팔기</h1>
      <PostImage></PostImage>
      <PostText></PostText>
    </Section>
  );
}
const Section = styled.div`
  & > h1 {
    font-size: 18px;
    color: #6c816d;
    font-weight: 600;
    border-bottom: 1px solid #dcdee3;
    padding-bottom: 16px;
    text-align: center;
  }
`;
