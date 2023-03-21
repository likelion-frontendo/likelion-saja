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
  const [birthday, setBirthday] = useState('');

  function emailValidation(email){
    let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!emailRegex.test(email)) {
      console.log('올바른 이메일 양식이 아닙니다');
    } else {
      console.log('이 이메일은 사용이 가능합니다');
    };
  }

  function passwordValidation(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if (password.length < 8) {
      console.log('비밀번호는 최소 8자리여야 합니다');
    } else if (password.length > 16) {
      console.log('비밀번호는 최대 16자리여야 합니다');
    } else if (!passwordRegex.test(password)) {
      console.log('비밀번호는 영어소문자, 영어대문자, 숫자, 특수기호가 들어가야 합니다');
    } else {
      console.log('이 비밀번호는 사용이 가능합니다');
    }
  }

  function passwordConfirmValidation(passwordConfirm) {
    if(passwordConfirm !== password) {
      console.log("비밀번호가 다릅니다!")
      console.log(password, passwordConfirm)
    } else {
      console.log("비밀번호가 확인됐습니다!")
      console.log(password, passwordConfirm)
    }
  }

  function mobileValidation(mobile) {
    const mobileRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if(mobileRegex.test(mobile)) {
      console.log('전화번호가 맞습니다.');
    }
  }

  function handleMobileValidation(e) {
    const mobile = e.target.value;
    const numberOnly = /^[0-9]*$/;

    if(!numberOnly.test(mobile)) {
      e.target.value = mobile.slice(0, -1);
      console.log('숫자를 입력해주세요');
      return;
    }

    /* if(mobile.length > 11) {
      e.target.value = mobile.slice(0, -1);
      console.log('11자리 이하의 전화번호를 입력해주세요');
      return;
    } */
    
    setMobile(mobile);
    mobileValidation(mobile);
  }

  function handleBirthdayYearValidataion(e) {
    const year = e.target.value;
    const numberOnly = /^[0-9]*$/;
    if(!numberOnly.test(year)) {
      e.target.value = year.slice(0, -1);
      return;
    }  

    if(year.length < 4) {
      console.log("생년월일을 정확하게 입력해주세요")
    } else if(year < 1900) {
      console.log('생년월일을 다시 확인해주세요');
    } else if(year > 2100) {
      console.log('생년월일을 다시 확인해주세요');
    }
  }

  function handleBirthdayMonthValidataion(e) {
    const month = e.target.value;
    const numberOnly = /^[0-9]*$/;
    if(!numberOnly.test(month)) {
      e.target.value = month.slice(0, -1);
      return;
    } 

    /* if(year.length < 2) {
      console.log("태어난 년도 4자리를 정확하게 입력해주세요")
    } else if(year < 1900) {
      console.log('생년월일을 다시 확인해주세요');
    } else if(year > 2100) {
      console.log('생년월일을 다시 확인해주세요');
    } */
  }

  return(
    <StyledSection className="registerTop">
      <Form className="registerForm" legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com" onChange={(e) => {setEmail(e.target.value); emailValidation(email)}}>
          <Button className="registerButtonShort">중복확인</Button>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" onChange={(e) => {setPassword(e.target.value); passwordValidation(password);}} />
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" onChange={(e) => {setPasswordConfirm(e.target.value); passwordConfirmValidation(passwordConfirm);}}/>
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" onChange={(e) => {setName(e.target.value);}} />
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요" maxLength="11" onChange={handleMobileValidation /* {setMobile(e.target.value); mobileValidation(e.target.value)}*/}>
          <Button className="registerButtonShort">인증번호 받기</Button>
        </RegisterFormInput>
        <div style={{display: 'flex', alignItems: 'center',}}>
          <Heading3 className="registerHeading">
            <Label className="registerLabel">생년월일<sup>*</sup></Label>
          </Heading3>
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', width: "333px", height: "44px", border: "1px solid #333333", borderRadius: '4px'}}>
            <input type="text" placeholder="YYYY" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} maxLength="4" onChange={handleBirthdayYearValidataion}/>
            <span>/</span>
            <input type="text" placeholder="MM" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} maxLength="2" onChange={handleBirthdayMonthValidataion}/>
            <span>/</span>
            <input type="text" placeholder="DD" style={{width: '33%', height: "38px", textAlign: 'center', border: 'none'}} />
          </div>
        </div>
        <RegisterFormInput label="생년월일" name="year" type="text"/>
        <div className="registerFormInput">
          <Heading3 className="registerHeading">
            <Label className="registerLabel">주소<sup>*</sup></Label>
          </Heading3>
          <Button className="registerButtonLong">주소 검색</Button>
        </div>
      </Form>
  </StyledSection>
  )
}

const StyledSection = styled.section`
  border-top: 2px solid #6C816D;

  & .registerFormInput {
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding: 20px 0;
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
    padding: 9px 0 9px 20px;
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
`