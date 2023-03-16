import sajaLogo from "@/assets/Home/logo.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <Link to="/" className="imgContainer">
        <img src={sajaLogo} alt="사자 로고" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">중고거래</Link>
          </li>
          <li>
            <Link to="/">동네가게</Link>
          </li>
          <li>
            <Link to="/">인기매물</Link>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="물품이나 동네를 검색해보세요"></input>
      <div>
        <Link to="/">로그인</Link>
        <button>회원가입</button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  width: 1200px;
  height: 64px;
  justify-content: space-around;
  margin-top: 10px;
  line-height: 64px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  img {
    width: 180px;
    height: 64px;
    margin-left: 0;
  }

  li {
    float: left;
    margin: 0 16px;
  }

  button {
    background-color: #6c816d;
    color: white;
    width: 100px;
    height: 40px;
    margin: 12px 16px;
    margin-right: 0;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 18px;
  }

  input {
    width: 400px;
    height: 40px;
    margin-top: 12px;
    border-radius: 6px;
    border: none;
    background-color: #f2f3f6;
    padding-left: 10px;
    font-weight: 400;
    font-size: 16px;
  }

  a {
    text-decoration-line: none;
    color: black;
    width: 64px;
    height: 24px;
    font-weight: 700;
    font-size: 18px;
  }
  a:hover {
    color: #eca997;
  }

  .imgContainer {
    width: 150px;
    height: 64px;
  }
`;
