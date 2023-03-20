import raccoon from "@/assets/Mypage/너굴.svg";
import raccoonIcon from "@/assets/Mypage/너굴.png";
import user from "@/assets/Mypage/user.png";
import yellowbubble from "@/assets/Mypage/yellowbubble.svg";
import styled from "styled-components/macro";

export function Compliment() {
  return (
    <SectionCompliment>
      <div className="ListTitle">
        <span>매너 칭찬</span>
      </div>
      <div>
        <img src={raccoon} alt="너굴이미지"></img>
        <ul>
          <p>
            받은 매너 칭찬
            <img src={raccoonIcon} alt="너굴아이콘" />
          </p>
          <li>
            <span>응답이 빨라요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />
              12
            </span>
          </li>
          <li>
            <span>시간약속을 잘 지켜요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />
              10
            </span>
          </li>
          <li>
            <span>친절하고 매너가 좋아요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />8
            </span>
          </li>
          <li>
            <span>제가 있는 곳까지 와서 거래했어요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />6
            </span>
          </li>
          <li>
            <span>좋은 상품을 저렴하게 판매해요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />3
            </span>
          </li>
          <li>
            <span>상품상태가 설명한 것과 똑같아요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />2
            </span>
          </li>
          <li>
            <span>상품설명이 자세해요</span>
            <span>
              <img src={user} alt="유저 이미지" className="userIcon" />0
            </span>
          </li>
        </ul>
      </div>
    </SectionCompliment>
  );
}

const SectionCompliment = styled.div`
  margin-top: 60px;

  .ListTitle {
    width: 396px;
    border-radius: 12px;
  }

  & div > img {
    margin-top: 24px;
  }

  & div {
    display: flex;
    align-items: flex-start;
  }

  & div ul {
    width: 316px;
    height: 340px;
    background-image: url(${yellowbubble});
    background-repeat: no-repeat;
    background-size: 320px 340px;
    margin-top: 24px;
    color: #6c816d;
    padding-left: 17px;
  }

  & div ul p {
    font-weight: 600;
    margin-bottom: 8px;
    margin: 24px 0 12px 24px;
  }

  & div ul p img {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    vertical-align: middle;
  }

  & div ul li {
    font-size: 14px;
    padding: 10px 24px 10px 24px;
    border-bottom: 1px solid #eee7c2;
    display: flex;
    justify-content: space-between;
  }

  & div ul li .userIcon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 4px;
  }

  & div ul li:nth-child(8) {
    border: 0;
  }
`;
