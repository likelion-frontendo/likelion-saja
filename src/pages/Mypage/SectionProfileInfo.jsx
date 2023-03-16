import styled from "styled-components/macro";
import profile from "@/assets/Mypage/유네찌.png";
import {Link} from "react-router-dom";

export function SectionProfileInfo() {
  return (
    <ProfileInfoTop>
      <div className="InfoProfileImg">
        <img src={profile} alt="프로필 이미지"></img>
      </div>
      <div className="UserInfoList">
        <ul>
          <li>
            <span>이름</span>
          </li>
          <li>
            <span>이메일</span>
          </li>
          <li>
            <span>핸드폰 번호</span>
          </li>
          <li>
            <span>생년월일</span>
          </li>
          <li>
            <span>성별</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>유미</span>
            <Link to="/">
              <span className="ProfileNum">#1817221</span>
            </Link>
          </li>
          <li>
            <span>gkghgkgh0@gmail.com</span>
          </li>
          <li>
            <span>010-1111-1111</span>
          </li>
          <li>
            <span>1995-05-28</span>
          </li>
          <li>
            <span>여</span>
          </li>
        </ul>
      </div>
    </ProfileInfoTop>
  );
}

const ProfileInfoTop = styled.div`
  display: flex;
  margin: 40px 0 0 24px;

  & .InfoProfileImg img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  & .UserInfoList {
    display: flex;
  }
  & .UserInfoList ul {
    font-size: 16px;
    color: #4d5159;
    margin: auto 0 auto 16px;
  }
  & .UserInfoList ul:nth-child(1) {
    color: #6c816d;
    font-weight: 600;
    padding-left: 24px;
  }
  & .UserInfoList ul:nth-child(2) li {
    font-weight: 400;
  }
  & .UserInfoList ul li {
    margin-top: 8px;
  }
  & .ProfileNum {
    color: #868b94;
    margin-left: 8px;
  }
`;
