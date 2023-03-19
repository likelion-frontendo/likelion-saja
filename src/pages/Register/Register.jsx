import { Heading2, RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer } from '@/components'
import styled from 'styled-components'

export function Register() {
  return(
    <>
      <StyledMain>
        <Header></Header>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation"><sup>*</sup>필수입력사항</p>
        <RegisterForm />
        <RegisterTerms />
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

/*   position: relative;

  & h2 {
    font-weight: 600;
    font-size: 22px;
    margin: 80px 0 40px 0;
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
  } */
`