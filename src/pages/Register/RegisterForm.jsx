import {Form, RegisterFormInput, Label, Button, Heading3} from "@/pages/Register"
import styled from 'styled-components'

export function RegisterForm() {
  return(
    <StyledSection className="registerTop">
      <Form className="registerForm" legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com">
          <Button className="registerButtonShort">중복확인</Button>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" />
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요">
          <Button className="registerButtonShort">인증번호 받기</Button>
        </RegisterFormInput>
        <RegisterFormInput label="생년월일" name="birthday" type="date" />
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
    color: #898989;
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