import sajaLogo from "@/assets/Home/logo.png";
import styled from "styled-components";

export function Header() {
  return (
    <StyledHeader>
      <a className="imgContainer" href="/">
        <img src={sajaLogo} alt="사자 로고" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">중고거래</a>
          </li>
          <li>
            <a href="/">동네가게</a>
          </li>
          <li>
            <a href="/">인기매물</a>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="물품이나 동네를 검색해보세요"></input>
      <div>
        <a href="/">로그인</a>
        <button>회원가입</button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  width: 1200px;
  height: 64px;
  justify-content: space-between;
  margin-top: 10px;
  line-height: 64px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  img {
    width: 180px;
    height: 64px;
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
