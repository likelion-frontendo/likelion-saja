import {SectionProfileInfo, MannerTemperature, SectionInfoCount, Compliment, MypageReview} from "@/pages/Mypage/";
import styled from "styled-components/macro";

export function Section() {
  return (
    <MypageSection>
      <h1>프로필</h1>
      <SectionProfileInfo></SectionProfileInfo>
      <MannerTemperature></MannerTemperature>
      <SectionInfoCount></SectionInfoCount>
      <div className="SectionItemReview">
        <Compliment></Compliment>
        <MypageReview></MypageReview>
      </div>
    </MypageSection>
  );
}

const MypageSection = styled.div`
  width: 816px;
  margin-left: 24px;

  & > h1 {
    font-size: 18px;
    color: #6c816d;
    font-weight: 600;
    border-bottom: 1px solid #dcdee3;
    padding-bottom: 16px;
    text-align: center;
  }

  & .SectionItemReview {
    display: flex;
  }
`;
