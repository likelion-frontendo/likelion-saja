import styled from "styled-components/macro";
import {SectionProfileInfo} from "@/pages/Mypage/SectionProfileInfo";
import {MannerTemperature} from "@/pages/Mypage/MannerTemperature";

export function Section() {
  return (
    <MypageSection>
      <h1>프로필</h1>
      <SectionProfileInfo></SectionProfileInfo>
      <MannerTemperature></MannerTemperature>
    </MypageSection>
  );
}

const MypageSection = styled.div`
  background-color: lightcyan;
  width: 816px;
  height: 100vh;
  margin-left: 24px;

  & > h1 {
    font-size: 18px;
    color: #6c816d;
    font-weight: 600;
    border-bottom: 1px solid #dcdee3;
    padding-bottom: 16px;
    text-align: center;
  }
`;