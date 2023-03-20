import yellowbubble from "@/assets/Mypage/yellowbubble.svg";
import user01 from "@/assets/Mypage/뽀야미.png";
import user02 from "@/assets/Mypage/미첼.png";
import user03 from "@/assets/Mypage/쭈니.png";
import user04 from "@/assets/Mypage/유네찌.png";
import styled from "styled-components/macro";

export function MypageReview() {
  return (
    <BuyReview>
      <div className="ListTitle">
        <span>구매 후기</span>
      </div>
      <div>
        <ul className="reviewList">
          <li>
            <img src={user01} alt="유저 이미지" className="userImage"></img>
            <span className="reviewBubble">거래 감사합니다~~!</span>
          </li>
          <li>
            <img src={user02} alt="유저 이미지" className="userImage"></img>
            <span className="reviewBubble">수고하세용</span>
          </li>
          <li>
            <img src={user03} alt="유저 이미지" className="userImage"></img>
            <span className="reviewBubble">와주셔서 감사합니당</span>
          </li>
          <li>
            <img src={user04} alt="유저 이미지" className="userImage"></img>
            <span className="reviewBubble">잘쓰겠습니다!</span>
          </li>
          <li>
            <img src={user01} alt="유저 이미지" className="userImage"></img>
            <span className="reviewBubble">감사합니다~~~!</span>
          </li>
        </ul>
      </div>
    </BuyReview>
  );
}

const BuyReview = styled.div`
  margin: 60px 0 0 24px;
  .ListTitle {
    width: 396px;
    border-radius: 12px;
  }

  & .userImage {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  & div ul {
    padding-top: 16px;
  }

  & div ul li {
    width: 396px;
    display: flex;
    margin-top: 18px;
    color: #6c816d;
    font-size: 14px;
  }

  & .reviewBubble {
    display: inline-block;
    width: 330px;
    height: 50px;
    background-image: url(${yellowbubble});
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 24px;
    padding-left: 40px;
    line-height: 50px;
  }
`;
