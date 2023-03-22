import { RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer, Heading2, Button } from '@/components'
import styled from 'styled-components'

export function Register() {
  return(
    <>
      <Header></Header>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation"><sup>*</sup>필수입력사항</p>
        <RegisterForm />
        <RegisterTerms />
        <Button className="registerButton">가입하기</Button>
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