import { Label, Heading2, Heading3 } from '@/pages/Register'
import styled from 'styled-components'

export function Register() {
  return(
    <>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <Heading3><Label name="이메일" label="이메일"></Label></Heading3>
      </StyledMain>
    </>
  )
}

const StyledMain = styled.main `
  width: 640px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

/*   position: relative;

  & h2 {
    font-weight: 600;
    font-size: 22px;
    margin: 80px 0 40px 0;
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
  } */
`