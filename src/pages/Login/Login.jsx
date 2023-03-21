import styled from 'styled-components/macro';
import { Button, LinkButton } from '@/pages/Login/index';
import { Form, Input, Label, Header, Footer, Heading2 } from '@/components/index';

export function Login() {
  return(
    <>
    <Header></Header>
    <StyledMain>
      <Heading2 className="header">로그인</Heading2>
      <Form className="login" legend="로그인">
        <Label name="로그인"></Label>
        <Input id="login" name="login" type="login" required placeholder="아이디를 입력해주세요."></Input>
        <Label name="비밀번호"></Label>
        <Input id="password" name="password" type="password" required placeholder="비밀번호를 입력해주세요."></Input>
      </Form>
      <Button type="button">로그인</Button>
      <LinkButton to="/register">회원가입</LinkButton>
    </StyledMain>
    <Footer></Footer>
    </>
  )
}

const StyledMain = styled.main `
  height: 496px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & .header {
    padding: 40px;
  }

    & .login {
      padding-bottom: 29px;
    }


    & Label {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }

  & Input {
    display: flex;
    width: 340px;
    height: 50px;
    font-size: 16px;
    padding-left: 20px;
    border: 1px solid #A6A6A6;
    border-radius: 4px;
    margin-bottom: 12px;
  }  
`
