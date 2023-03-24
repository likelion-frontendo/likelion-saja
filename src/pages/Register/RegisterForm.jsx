import {RegisterFormInput} from "@/pages/Register"
import {Form, Button, Label, Heading3} from "@/components";
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import { emailAtom, imageAtom, imageURLAtom, mobileAtom, nameAtom, birthdayAtom, nameVisibleAtom, nameWarningAtom, passwordAtom, passwordConfirmAtom, emailWarningAtom, passwordWarningAtom, passwordConfirmWarningAtom, mobileWarningAtom, mobileVisibleAtom, passwordConfirmVisibleAtom, passwordVisibleAtom, emailVisibleAtom } from './atoms';
import { storage } from "@/firebase/app";
import { ref } from "firebase/storage";
import { useLayoutEffect } from 'react';

export function RegisterForm() {

  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [mobile, setMobile] = useRecoilState(mobileAtom);
  const [birthday, setBirthday] = useRecoilState(birthdayAtom);
  const [image, setImage] = useRecoilState(imageAtom);
  const [imageURL, setImageURL] = useRecoilState(imageURLAtom);

  const [emailVisible, setEmailVisible] = useRecoilState(emailVisibleAtom);
  const [passwordVisible, setPasswordVisible] = useRecoilState(passwordVisibleAtom);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useRecoilState(passwordConfirmVisibleAtom);
  const [mobileVisible, setMobileVisible] = useRecoilState(mobileVisibleAtom);
  const [nameVisible, setNameVisible] = useRecoilState(nameVisibleAtom);

  const [emailWarning, setEmailWarning] = useRecoilState(emailWarningAtom);
  const [passwordWarning, setPasswordWarning] = useRecoilState(passwordWarningAtom);
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useRecoilState(passwordConfirmWarningAtom);
  const [mobileWarning, setMobileWarning] = useRecoilState(mobileWarningAtom);
  const [nameWarning, setNameWarning] = useRecoilState(nameWarningAtom);

  /* 이메일 유효성 검사 */
  function emailValidation(email){
    console.log(email);
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    let warningMessage = '';

    if(!emailRegex.test(email)) {
      warningMessage="올바른 이메일 형식이 아닙니다"
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    };
  }

  /* 비밀번호 유효성 검사 */
  function passwordValidation(password) {

    let warningMessage = '';

    if (password.length < 7) {
      warningMessage = '비밀번호는 최소 8자리여야 합니다';
      setPasswordVisible(true);
      setPasswordWarning(warningMessage);
    } else {
      setPasswordVisible(false);
    }
  }

  /* 비밀번호 중복 유효성 검사 */
  function passwordConfirmValidation(passwordConfirm) {
    let warningMessage = '';

    if(passwordConfirm !== password) {
      setPasswordConfirmVisible(true);
      warningMessage = "비밀번호가 다릅니다!";
      setPasswordConfirmWarning(warningMessage);
    } else {
      setPasswordConfirmVisible(false);
    }
  }

  /* 이름 유효성 검사 */
  function nameValidation(name) {
    const nameRegex = /^[가-힣]{2,5}$/;
    let warning = "";
    if(!nameRegex.test(name)) {
      warning = "올바른 이름이 아닙니다";
      setNameWarning(warning);
      setNameVisible(true);
    } else {
      setNameVisible(false);
    }
  }

  /* 휴대폰 유효성 검사 */
  function mobileValidation(mobile) {
    const mobileRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    let warning = '';
    
    if(!mobileRegex.test(mobile)) {
      warning = '올바른 휴대폰 형식이 아닙니다';
      setMobileWarning(warning);
      setMobileVisible(true);
    } else {
      setMobileVisible(false);
    }
  }

  /* 휴대폰 잘못된 문자입력 방지 */
  function handleMobileValidation(e) {
    const mobile = e.target.value;
    const numberOnly = /^[0-9]*$/;
    let warning = '';

    if(!numberOnly.test(mobile)) {
      e.target.value = mobile.slice(0, -1);
      warning = '숫자만 입력이 가능합니다';
      setMobileWarning(warning);
      setMobileVisible(true);
      return;
    }

    setMobile(mobile);
  }

  /* 생년월일 입력값 업데이트 */
  function handleBirthdayValue(e) {
    setBirthday(e.target.value);
    console.log(birthday);
  }

  /* 이미지 입력값 업데이트 */
  function handleProfileImage(e) {
    setImage(e.target.files[0]);
  }

  /* 파이어베이스 업로드하기 */
  function updateImageToFirebase(file){
    const fileRef = ref(storage, `profiles/${file}`);
  }

  useLayoutEffect(() => {
    emailValidation(email);
  }, [email]);

  useLayoutEffect(() => {
    passwordValidation(password);
  }, [password]);

  useLayoutEffect(() => {
    console.log(passwordConfirm)
    passwordConfirmValidation(passwordConfirm);
  }, [passwordConfirm]);

  useLayoutEffect(() => {
    nameValidation(name);
  }, [name]);

  useLayoutEffect(() => {
    mobileValidation(mobile);
  }, [mobile]);

  return(
    <StyledSection className="registerTop">
      <Form className="registerForm" legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com" onChange={(e) => {setEmail(e.target.value);}}>
          <Button className="registerButtonShort">중복확인</Button>
          <span className={emailVisible === true ? "registerWarning showWarning" : "registerWarning"}>{emailWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" onChange={(e)=>{setPassword(e.target.value);}}>
          <span className={passwordVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" onChange={(e) => {setPasswordConfirm(e.target.value);}}>
          <span className={passwordConfirmVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordConfirmWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" onChange={(e) => {setName(e.target.value);}}>
          <span className={nameVisible === true ? "registerWarning showWarning" : "registerWarning"}>{nameWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요" maxLength="11" onChange={handleMobileValidation}>
          <Button className="registerButtonShort">인증번호 받기</Button>
          <span className={mobileVisible === true ? "registerWarning showWarning" : "registerWarning"}>{mobileWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="생년월일" name="year" type="date" onChange={handleBirthdayValue}/>
        <div className="registerFormInput">
          <Heading3 className="registerHeading">
            <Label className="registerLabel">프로필 사진<sup>*</sup></Label>
          </Heading3>
          <input type="file" onChange={handleProfileImage} />
          {/* <Button className="registerButtonLong" >프로필 등록</Button> */}
        </div>
      </Form>
  </StyledSection>
  )
}

const StyledSection = styled.section`
  border-top: 2px solid #6C816D;

  & .registerFormInput {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;
    padding: 20px 0;
    position: relative;
  }

  & .registerLabel {
    display: inline-block;
    width: 139px;
    margin-right: 8px;
  }

  & .registerLabel > sup {
    color: red;
    position: relative;
    bottom: 5px;
    left: 5px;
  }

  & .registerInput {
    width: 333px;
    height: 44px;
    margin-right: 8px;
    font-size: 16px;
    padding: 9px 20px;
  }

  & .registerButtonShort {
    width: 143px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #6C816D;
    cursor: pointer;
  }

  & .registerButtonLong {
    width: 333px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #6C816D;
    cursor: pointer;
  }

  & .registerWarning {
    display: none;
    position: absolute; 
    left: 150px;
    top: 75px;
    color: red;
  }

  & .showWarning {
    display: block;
  }
`