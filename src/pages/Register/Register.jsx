import { RegisterFormInput, RegisterForm, RegisterButton, RegisterLabel, RegisterTerms } from '@/pages/Register'
import { Header, Footer } from '@/components'
import styled from 'styled-components'

export function Register() {
  return(
    <>
      <Header></Header>
      <StyledMain className="register">
        <h2>회원가입</h2>
        <div className="description"><sup>*</sup>필수입력사항</div>
        <RegisterForm legend="회원가입">
          <RegisterFormInput className="formInput" label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com">
            <RegisterButton>중복확인</RegisterButton>
          </RegisterFormInput>
          <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
          <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" />
          <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" />
          <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요">
            <RegisterButton>인증번호 받기</RegisterButton>
          </RegisterFormInput>
          <RegisterFormInput label="생년월일" name="birthday" type="date"/>
          <div className="addressWrapper">
            <RegisterLabel>주소<sup>*</sup></RegisterLabel>
            <RegisterButton style={{width: '333px', height: '44px'}}>주소 검색</RegisterButton>
          </div>
          <RegisterTerms></RegisterTerms>
          <div className="registerButton" >
            <RegisterButton style={{width: '340px', height: '54px', background: '#6C816D', color: 'white'}}>가입하기</RegisterButton>
          </div>
        </RegisterForm>
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
  position: relative;

  & h2 {
    font-weight: 600;
    font-size: 22px;
    margin: 40px 0;
  }

  & .description {
    text-align: right;
    font-size: 12px;
    font-weight: 600;
    text-align: right;
    width: 640px;
    margin-bottom: 4px;
    padding: 4px;
  }

  & .description > sup {
    color: red;
    position: relative;
    top: -4px;
    left: -4px;
  }

  .addressWrapper {
    margin-bottom: 20px;
  }

  & .registerButton {
    border-top: 1px solid black;
    text-align: center;
  }

  & .registerButton > button {
    margin: 40px 0;
  }
`