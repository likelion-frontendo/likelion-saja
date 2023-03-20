import sajaLogo from "@/assets/Home/logo.png";
import {Link} from "react-router-dom";
import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link to="/" className="imgContainer">
          <img src={sajaLogo} alt="사자 마켓" />
        </Link>
      </h1>

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
      <div className="buttonContainer">
        <button aria-label="로그인" className="loginButton">
          로그인
        </button>
        <button aria-label="회원가입" className="registerButton">
          회원가입
        </button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: center;
  top: 0;
  line-height: 64px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;

  & img {
    width: 180px;
    height: 64px;
    margin-left: 0;
  }

  & nav {
    margin-left: 20px;
    min-width: 310px;
  }

  & li {
    float: left;
    margin: 0;
  }

  & button {
    width: 100px;
    height: 40px;
    margin: 12px 16px;
    margin: 0;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 18px;
  }

  & .buttonContainer {
    min-width: 200px;
  }

  & .loginButton {
    color: black;
    background-color: white;
  }
  & .registerButton {
    background-color: #6c816d;
    color: white;
  }

  & input {
    width: 400px;
    height: 40px;
    margin: 0 24px;
    margin-top: 12px;
    border-radius: 6px;
    border: none;
    background-color: #f2f3f6;
    padding-left: 10px;
    font-weight: 400;
    font-size: 16px;
  }

  & a {
    text-decoration-line: none;
    color: black;
    width: 64px;
    height: 24px;
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
  }

  & a:hover {
    color: #eca997;
  }

  & .imgContainer {
    width: 150px;
    height: 64px;
    margin-left: 0;
  }
`;
