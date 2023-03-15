import styled from 'styled-components/macro';

export function Login() {
  return(
      <StyledMain>
        <h1>로그인</h1>
        <form></form>
      </StyledMain>
  )
}

const StyledMain = styled.main `
  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`