import styled from 'styled-components/macro';
import { FormInput } from '@/pages/Login/FormInput';
import { Button } from '@/pages/Login/Button';
import { LinkButton } from '@/pages/Login/LinkButton';

export function Login() {
  return(
    <StyledMain>
      <h1>로그인</h1>
        <form>
          <FormInput name="아이디" type="text" placeholder="아이디를 입력해주세요"></FormInput>
          <FormInput name="비밀번호" type="password" placeholder="비밀번호를 입력해주세요"></FormInput>
          <Button></Button>
          <LinkButton></LinkButton>
      </form>
    </StyledMain>
  )
}

const StyledMain = styled.main `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    h1 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 44px;
    }

    input {
      margin-bottom: 12px;
    }
`