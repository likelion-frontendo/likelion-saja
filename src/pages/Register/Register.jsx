import { RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer, Heading2, Button } from '@/components'
import { useRecoilValue, useRecoilState } from "recoil";
import styled from 'styled-components'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { auth, db } from "@/firebase/app";
import { 
  emailAtom, emailVisibleAtom,
  passwordAtom, passwordVisibleAtom,
  passwordConfirmAtom, passwordConfirmVisibleAtom,
  nameAtom, nameVisibleAtom,
  mobileAtom, mobileVisibleAtom,
  checkedTermsAtom,
  checkedAgeAtom,
  imageURLAtom,
  currentUserAtom
} from './atoms';
import { useEffect } from 'react';

  function useCurrentUser() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
    
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          const currentUser = {uid: user.uid, email: user.email};
          console.log(currentUser);
          setCurrentUser(currentUser);
        }
      });
    }, [setCurrentUser]);

    return currentUser;
  }

export function Register() {

  const [email, setEmail] = useRecoilState(emailAtom)
  const [emailVisible, setEmailVisible] = useRecoilState(emailVisibleAtom)
  const [password, setPassword] = useRecoilState(passwordAtom)
  const [passwordVisible, setPasswordVisible] = useRecoilState(passwordVisibleAtom)
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmAtom);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useRecoilState(passwordConfirmVisibleAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [nameVisible, setNameVisible] = useRecoilState(nameVisibleAtom);
  const [mobile, setMobileAtom] = useRecoilState(mobileAtom);
  const [mobileVisible, setMobileVisibleAtom] = useRecoilState(mobileVisibleAtom);
  const [imageURL, setimageURL] = useRecoilState(imageURLAtom);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  
  const checkedTerms = useRecoilValue(checkedTermsAtom);
  const checkedAge = useRecoilValue(checkedAgeAtom);

  async function handleCheckRegister() {
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
      await registerUser();
      await addUserCollection(name, mobile, email);
      console.log(currentUser);
    }
  }

  /* 파이어베이스 회원가입 기능 */
  async function registerUser() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      console.log("회원가입 성공!", user);
    } catch(error) {
      console.log(error.message);
    }
  }

  async function addUserCollection(name, mobile, email) {
    await setDoc(doc(db, "users", "a"), {
      name: name,
      mobile: mobile,
      email: email,
    })
    console.log("사용자 정보 추가");
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