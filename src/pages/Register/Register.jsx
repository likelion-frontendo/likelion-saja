import { RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer, Heading2, Button } from '@/components'
import { useRecoilValue, useRecoilState } from "recoil";
import styled from 'styled-components'
import {emailAtom, 
  passwordAtom, 
  passwordConfirmAtom, 
  nameAtom, 
  mobileAtom, 
  emailVisibleAtom, 
  passwordVisibleAtom, 
  passwordConfirmVisibleAtom, 
  mobileVisibleAtom,
  emailWarningAtom,
  passwordWarningAtom,
  passwordConfirmWarningAtom,
  mobileWarningAtom} from "@/pages/Register/atoms";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/app";

export function Register() {

  const email = useRecoilValue(emailAtom);
  const password = useRecoilValue(passwordAtom);
  const passwordConfirm = useRecoilValue(passwordConfirmAtom);
  const mobile = useRecoilValue(mobileAtom);

  // const emailVisibleValue = useRecoilValue(emailVisibleAtom);
  // const passwordVisibleValue = useRecoilValue(passwordVisibleAtom);
  // const passwordConfirmVisibleValue = useRecoilValue(passwordConfirmVisibleAtom);
  // const mobileVisibleValue = useRecoilValue(mobileVisibleAtom);
  
  const [emailVisible, setEmailVisible] = useRecoilState(emailVisibleAtom);
  const [passwordVisible, setPasswordVisible] = useRecoilState(passwordVisibleAtom);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useRecoilState(passwordConfirmVisibleAtom);
  const [mobileVisible, setMobileVisible] = useRecoilState(mobileVisibleAtom);

  const [emailWarning, setEmailWarning] = useRecoilState(emailWarningAtom);
  const [passwordWarning, setPasswordWarning] = useRecoilState(passwordConfirmAtom);
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useRecoilState(passwordConfirmAtom);
  const [mobileWarning, setMobileWarning] = useRecoilState(mobileWarningAtom);

/*   function emailValidation(email) {
    // 이메일 정규식 표현 조건
    const emailRegex = /^\S+@\S+\.\S+$/;
  
    let warningMessage = "";
  
    // 인풋값 확인
    if (email === "") {
      warningMessage = "이메일을 입력해주세요";
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    }
  
    //형식 확인
    if (!emailRegex.test(email)) {
      warningMessage = "올바른 이메일 형식이 아닙니다";
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    }
  } */

  function emailValidation() {
    const emailRegex = /^\S+@\S+\.\S+$/;
    let warningMessage = '';
    if(email === "") {
      warningMessage = "빈 값은 안 됩니다";
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    }

    if (!emailRegex.test(email)) {
      warningMessage = "올바른 이메일 형식이 아닙니다";
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    }
  }


  function handleCheckRegister(){
    let warningMessage = '';
    if(email === "" || emailVisible === true) {
      warningMessage = "올바른 이메일 형식이 아닙니다"
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else if(password === "" || passwordVisible === true) {
      warningMessage = "올바른 비밀번호 형식이 아닙니다"
      setPasswordWarning(warningMessage);
      setPasswordVisible(true);
    } else if(passwordConfirm === "" || passwordConfirmVisible === true) {
      warningMessage = "같은 비밀번호가 아닙니다"
      setPasswordConfirmWarning(warningMessage);
      setPasswordConfirmVisible(true);
    } else if(mobile === "" || mobileVisible === true) {
      warningMessage = "올바른 휴대폰 번호가 아닙니다"
      setMobileWarning(warningMessage);
      setMobileVisible(true);
    } else {
      console.log('회원가입이 가능합니다!')
    }
  }

  // 파이어베이스에 회원가입
  async function registerUser() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }

    /* if(emailVisibleValue === false) {
      console.log(emailVisibleValue);
      console.log('이메일 인증하세요');
    } else if(passwordVisibleValue === false) {
      console.log('비밀번호 인증하세요');
    } else if(passwordConfirmVisibleValue === false) {
      console.log('비밀번호 중복 확인하세요');
    } else if(mobileVisibleValue === false) {
      console.log('휴대전화 입력하세요');
    } else {
      console.log('통과');
    } */
  }

  

  return(
    <>
      <Header></Header>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation"><sup>*</sup>필수입력사항</p>
        <RegisterForm />
        <RegisterTerms />
        <Button className="registerButton" onClick={handleCheckRegister}>가입하기</Button>
      </StyledMain>
      <Footer></Footer>
    </>
  )
}

const StyledMain = styled.main `
  width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    margin: 100px 0 40px 0;
  }

  & .registerInformation {
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    width: 640px;
    margin-bottom: 4px;
    padding: 4px;
  }

  & .registerInformation > sup {
    color: red;
    font-size: 16px;
    position: relative;
    top: -4px;
    left: -4px;
  }

  & > button {
    width: 333px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #6C816D;
    border: 1px solid #6C816D;
    color: #fff;
    cursor: pointer;
    margin: 40px 0 80px 0;
  }
`