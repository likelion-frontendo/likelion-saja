import temperature from "@/assets/Mypage/매너온도 이미지.svg";
import styled from "styled-components/macro";
import {ReactComponent as Exclamation} from "@/assets/Mypage/exclamation-circle.svg";

export function MannerTemperature() {
  return (
    <Temperature>
      <div>
        <h3>매너온도</h3>
        <Exclamation className="explanation" />
      </div>
      <img src={temperature} alt="매너온도 이미지" className="temperature" />
    </Temperature>
  );
}

const Temperature = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 40px;
  & > div {
    display: flex;
    justify-content: center;
  }
  & h3 {
    padding-right: 4px;
    color: #4d5159;
    font-weight: 600;
    margin-bottom: 20px;
  }
  & .explanation {
    cursor: pointer;
  }
`;
