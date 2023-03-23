import {RegisterFormInput} from "@/pages/Register"
import {Form, Button, Label, Heading3} from "@/components";
import styled from 'styled-components'
import { useState } from 'react';

export function RegisterForm() {

  // 인풋값을 추척할 state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  // const [birthday, setBirthday] = useState('');

  const [emailVisible, setEmailVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);

  const [emailWarning, setEmailWarning] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useState("");
  const [mobileWarning, setMobileWarning] = useState("");

  function emailValidation(email){
    let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let warningMessage = '';

    if(!emailRegex.test(email)) {
      warningMessage="올바른 이메일 형식이 아닙니다"
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    };
  }

  function passwordValidation(password) {

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    let warningMessage = '';

    if (password.length < 8) {
      warningMessage = '비밀번호는 최소 8자리여야 합니다';
      setPasswordVisible(true);
      setPasswordWarning(warningMessage);
    } else if (password.length > 16) {
      warningMessage = '비밀번호는 최대 16자리여야 합니다';
      setPasswordVisible(true);
      setPasswordWarning(warningMessage);
    } else if (!passwordRegex.test(password)) {
      warningMessage = '비밀번호는 영어소문자, 영어대문자, 숫자, 특수문자가 들어가야 합니다';
      setPasswordVisible(true);
      setPasswordWarning(warningMessage);
    } else {
      warningMessage = '이 비밀번호는 사용이 가능합니다';
      setPasswordVisible(false);
      setPasswordWarning(warningMessage);
    }

    // return warningMessage;
  }

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
    mobileValidation(mobile);
  }

  /* function handleBirthdayYearValidataion(e) {
    const year = e.target.value;
    const numberOnly = /^[0-9]*$/;
    if(!numberOnly.test(year)) {
      e.target.value = year.slice(0, -1);
      return;
    }  

    if(year < 1900 || year > 2100) {
      console.log('연을 다시 확인해주세요');
    }
  }

  function handleBirthdayMonthValidataion(e) {
    const month = e.target.value;
    const numberOnly = /^[0-9]*$/;
    if(!numberOnly.test(month)) {
      e.target.value = month.slice(0, -1);
      return;
    } 

    if(month < 1 || month > 12) {
      console.log('월을 다시 확인해주세요');
    }
  }

  function handleBirthdayDayValidataion(e) {
    const day = e.target.value;
    const numberOnly = /^[0-9]*$/;
    if(!numberOnly.test(day)) {
      e.target.value = day.slice(0, -1);
      return;
    } 

    if(day < 1 || day > 31) {
      console.log('월을 다시 확인해주세요');
    }
  } */

  return(
    <StyledSection className="registerTop">
      <Form className="registerForm" legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com" onChange={(e) => {setEmail(e.target.value); emailValidation(email)}}>
          <Button className="registerButtonShort">중복확인</Button>
          <span className={emailVisible === true ? "registerWarning showWarning" : "registerWarning"}>{emailWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" onChange={(e)=>{setPassword(e.target.value); passwordValidation(password)}}>
          <span className={passwordVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" onChange={(e) => {setPasswordConfirm(e.target.value); passwordConfirmValidation(passwordConfirm);}}>
          <span className={passwordConfirmVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordConfirmWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" onChange={(e) => {setName(e.target.value);}} />
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요" maxLength="11" onChange={handleMobileValidation}/*(e) => {setMobile(e.target.value); mobileValidation(e.target.value)}*/>
          <Button className="registerButtonShort">인증번호 받기</Button>
          <span className={mobileVisible === true ? "registerWarning showWarning" : "registerWarning"}>{mobileWarning}</span>
        </RegisterFormInput>
        {/* <div style={{display: 'flex', alignItems: 'center',}}>
          <Heading3 className="registerHeading">
            <Label className="registerLabel">생년월일<sup>*</sup></Label>
          </Heading3>
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', width: "333px", height: "44px", border: "1px solid #333333", borderRadius: '4px'}}>
            <input type="text" placeholder="YYYY" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} maxLength="4" onChange={handleBirthdayYearValidataion}/>
            <span>/</span>
            <input type="text" placeholder="MM" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} maxLength="2" onChange={handleBirthdayMonthValidataion}/>
            <span>/</span>
            <input type="text" placeholder="DD" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} maxLength="2" />
          </div>
        </div> */}
        <RegisterFormInput label="생년월일" name="year" type="date"/>
        <div className="registerFormInput">
          <Heading3 className="registerHeading">
            <Label className="registerLabel">주소<sup>*</sup></Label>
          </Heading3>
          <Button className="registerButtonLong">주소 검색</Button>
        </div>
        <div className="registerFormInput">
          <Heading3 className="registerHeading">
            <Label className="registerLabel">프로필 사진<sup>*</sup></Label>
          </Heading3>
          <Button className="registerButtonLong">프로필 등록</Button>
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