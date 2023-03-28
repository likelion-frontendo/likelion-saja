import temperature from "@/assets/Mypage/매너온도 이미지.svg";
import {ReactComponent as Exclamation} from "@/assets/Mypage/exclamation-circle.svg";
import styled from "styled-components/macro";

export function MannerTemperature() {
  return (
    <Temperature>
      <div>
        <h3>매너온도</h3>
        <Exclamation className="explanation" />
        <div className="HoverText">
          매너온도는 사자마켓 사용자로부터 받은 <br /> 칭찬, 후기, 비매너 평가, 운영자 제재 등을 <br />
          종합해서 만든 매너 지표예요.
        </div>
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

    &:hover + .HoverText {
      display: block;
    }
  }

  & .HoverText {
    margin-top: 20px;
    padding: 15px 20px;
    font-size: 14px;
    background-color: #6c816d;
    border-radius: 5px;
    color: #ffffff;
    display: none;
    position: absolute;
  }
`;
