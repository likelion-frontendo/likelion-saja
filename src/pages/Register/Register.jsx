import { RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer, Heading2, Button } from '@/components'
import { useRecoilValue } from "recoil";
import styled from 'styled-components'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/app";
import { 
  emailAtom, 
  passwordAtom, 
  passwordConfirmAtom,
  emailVisibleAtom, 
  passwordVisibleAtom,
  passwordConfirmVisibleAtom,
  mobileAtom,
  mobileVisibleAtom,
  checkedTermsAtom,
  checkedAgeAtom,
  nameAtom,
  nameVisibleAtom,
} from './atoms';

export function Register() {

  const email = useRecoilValue(emailAtom);
  const emailVisible = useRecoilValue(emailVisibleAtom );
  const password = useRecoilValue(passwordAtom);
  const passwordVisible = useRecoilValue(passwordVisibleAtom);
  const passwordConfirm = useRecoilValue(passwordConfirmAtom);
  const passwordConfirmVisible = useRecoilValue(passwordConfirmVisibleAtom);
  const mobile = useRecoilValue(mobileAtom);
  const mobileVisible = useRecoilValue(mobileVisibleAtom);
  const checkedTerms = useRecoilValue(checkedTermsAtom);
  const checkedAge = useRecoilValue(checkedAgeAtom);
  const name = useRecoilValue(nameAtom);
  const nameVisible = useRecoilValue(nameVisibleAtom);

  function handleCheckRegister() {
    if(email === "" || emailVisible === true) {
      console.log('응 이메일 탈락~');
      return;
    } else if (password === "" || passwordVisible === true) {
      console.log('응 비번 탈락~');
      return;
    } else if (passwordConfirm === "" || passwordConfirmVisible === true) {
      console.log('응 비번중복 탈락~');
      return;
    } else if (name === "" || nameVisible === true) {
      console.log('응 이름 탈락~');
      return;
    } else if (mobile === "" || mobileVisible === true) {
      console.log('응 휴대폰 탈락~');
      return;
    } else if (checkedTerms === false) {
      console.log('이용약관 체크 안함');
      return;
    } else if (checkedAge === false) {
      console.log('나이 확인 안함');
      return;
    } else {
      console.log('이야 이걸 통과하네ㅋ');
      registerUser() 
    }
  }

  // 파이어베이스에 회원가입
  async function registerUser() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }
  }

  return(
    <>
      <Header></Header>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation"><sup>*</sup>필수입력사항</p>
        <RegisterForm />
        <RegisterTerms />
        <Button className="registerButton" onClick={handleCheckRegister}>가입하기</Button>
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