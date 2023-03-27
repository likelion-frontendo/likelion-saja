import styled from "styled-components";
import {Link} from "react-router-dom";
import {Image, Heading1, Button, Input} from "@/components";
import sajaLogo from "@/assets/Home/logo.png";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/app';
import {signOut} from "firebase/auth";
import { atom, useRecoilState } from 'recoil';
import { uidAtom } from '@/pages/Register/atoms/uidAtom';
import { useEffect } from 'react';


export const checkCurrentUserStateAtom = atom({
  key: "checkCurrentUserStateAtom",
  default: false
})

export function Header() {  

  const [checkCurrentUserState, setCheckCurrentUserState] = useRecoilState(checkCurrentUserStateAtom);
  const [uid, setUid] = useRecoilState(uidAtom);

  useEffect(() => {
    // 종속성 배열에 포함된 항목이 변경될 때마다 이벤트 구독 시도 (먼저 클린업 함수로 이벤트 구독 해제 됨)
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        setCheckCurrentUserState(true);
        setUid(userId);
        console.log("사용자 로그인", checkCurrentUserState, uid);
      } else {
        setCheckCurrentUserState(false);
        setUid("");
        console.log("사용자 로그아웃", checkCurrentUserState, uid);
      }
    });
  
    // 리-렌더링 : "구독 해제 → 구독"을 위한 클린업 함수 반환
    return unsub;
  }, [checkCurrentUserState, setCheckCurrentUserState, setUid, uid]);

  async function handleLogout() {
    try {
      await signOut(auth);
      console.log("로그아웃!");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <StyledHeader>
      <Heading1>
        <Link to="/" className="imgContainer">
          <Image src={sajaLogo} alt="사자 마켓" />
        </Link>
      </Heading1>

      <nav>
        <ul>
          <li>
            <Link to="/">중고거래</Link>
          </li>
          <li>
            <Link to="/">동네가게</Link>
          </li>
          <li>
            <Link to="/PopularProduct">인기매물</Link>
          </li>
        </ul>
      </nav>
      <Input type="text" placeholder="물품이나 동네를 검색해보세요"></Input>
      <div className="buttonContainer">
        {!checkCurrentUserState && (
          <>
            <Link to="/login" className="loginButton">
              로그인
            </Link>
            <Link to="/register" className="loginButton">
              회원가입
            </Link>
          </>
        )}
        {checkCurrentUserState && (
          <>
            <Link to="/mypage">마이 페이지</Link>
            <Button type="button" aria-label="로그아웃" className="loginButton" onClick={handleLogout}>
              로그아웃
            </Button>
          </>
        )}
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
