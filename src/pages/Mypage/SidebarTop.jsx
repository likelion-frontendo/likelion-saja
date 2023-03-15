import styled from "styled-components/macro";
import SidebarBottom from "@/pages/Mypage/SidebarBottom";

function SidebarTop() {
  return (
    <MypageSide>
      <div className="profile">
        <img src={require("@/assets/Mypage/유네찌.png")} alt="프로필 이미지"></img>
        <p className="profileName">유미</p>
        <p className="profileNum">#1817221</p>
      </div>
      <SidebarBottom></SidebarBottom>
    </MypageSide>
  );
}

const MypageSide = styled.div`
  width: 216px;
  height: 598px;
  /* profile */
  & .profile {
    height: 220px;
    border: 1px solid #6c816d;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    text-align: center;
    padding-top: 24px;
  }
  & .profile img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  & .profile .profileName {
    margin-top: 16px;
    color: #6c816d;
    font-size: 16px;
    font-weight: 600;
  }
  & .profile .profileNum {
    margin-top: 8px;
    color: #868b94;
    font-size: 14px;
  }
`;
export {SidebarTop};
