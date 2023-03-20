import {Link} from "react-router-dom";
import {ReactComponent as Person} from "@/assets/Mypage/person.svg";
import {ReactComponent as Buy} from "@/assets/Mypage/bag-frame.svg";
import {ReactComponent as Receipt} from "@/assets/Mypage/receipt.svg";
import {ReactComponent as Heart} from "@/assets/Mypage/heart.svg";
import {ReactComponent as Tag} from "@/assets/Mypage/tag.svg";
import {ReactComponent as Gear} from "@/assets/Mypage/gear.svg";
import {ReactComponent as Envelope} from "@/assets/Mypage/envelope.svg";
import styled from "styled-components/macro";

export function SidebarBottom() {
  return (
    <SidebarList>
      <div className="menuTitle">My Page</div>
      <ul className="listTop">
        <Link to="/">
          <li>
            <Person className="listIcon" />
            <span>내정보</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <Buy className="listIcon" />
            <span>구매 내역</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <Receipt className="listIcon" />
            <span>판매 내역</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <Heart className="listIcon" />
            <span>관심 목록</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <Tag className="listIcon" />
            <span>알림 키워드 설정</span>
          </li>
        </Link>
      </ul>
      <ul className="listBottom">
        <Link to="/">
          <li>
            <Gear className="listIcon" />
            <span>내 프로필 수정</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <Envelope className="listIcon" />
            <span>친구 초대</span>
          </li>
        </Link>
      </ul>
    </SidebarList>
  );
}

const SidebarList = styled.div`
  height: 340px;
  background-color: #fbfafa;
  border-radius: 0 0 12px 12px;

  & .menuTitle {
    height: 40px;
    background-color: #6c816d;
    color: #fff;
    line-height: 40px;
    padding-left: 18px;
  }

  & ul li {
    margin: 18px 0 0 18px;
    color: #4d5159;
  }

  & ul li span {
    transition: all 0.2s ease-in-out;
  }

  .listIcon {
    fill: #4d5159;
    margin: -2px 4px 0 0;
    vertical-align: middle;
    transition: fill 0.2s ease-in-out;
  }

  .listTop {
    padding: 6px 0 18px 0;
  }

  .listBottom {
    padding-top: 6px;
    border-top: 1px solid #dcdee3;
  }

  & ul li:hover .listIcon,
  & ul li:hover {
    fill: #eca997;
    color: #eca997;
  }
`;
