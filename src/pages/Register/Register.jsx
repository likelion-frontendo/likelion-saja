import { useRecoilValue, useRecoilState } from "recoil";
import { emailAtom, passwordAtom, passwordConfirmAtom, nameAtom, mobileAtom, birthdayAtom, profileImageAtom, profileImageURLAtom, currentUserAtom } from './atoms/inputValueAtoms';
import { emailVisibleAtom, passwordVisibleAtom, passwordConfirmVisibleAtom, nameVisibleAtom, mobileVisibleAtom } from './atoms/checkInputValueAtom';
import { checkedTermsAtom, checkedAgeAtom } from './atoms/termsAtoms';
import { uidAtom } from './atoms/uidAtom';
import styled from 'styled-components'
import { auth, db } from "@/firebase/app";
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterForm, RegisterTerms } from '@/pages/Register'
import { Header, Footer, Heading2, Button } from '@/components'


  /* function useCurrentUser() {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
    
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          const loginUser = {uid: user.uid, email: user.email};
          setCurrentUser(loginUser);
        }
      });
    }, [setCurrentUser]);

    return currentUser;
  } */

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
  const [profileImageURL, setProfileImageURL] = useRecoilState(profileImageURLAtom);
  const [profileImage, setProfileImage] = useRecoilState(profileImageAtom);
  const [birthday, setBirthday] = useRecoilState(birthdayAtom);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const [uid, setUid] = useRecoilState(uidAtom);
  
  const checkedTerms = useRecoilValue(checkedTermsAtom);
  const checkedAge = useRecoilValue(checkedAgeAtom);
  // const userObject = useCurrentUser();

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
    }
  }

  /* 파이어베이스 회원가입 기능 */
  async function registerUser() {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log("회원가입 성공!")
      addUserCollection(result.user.uid, name, mobile, email, birthday, profileImageURL)
    } catch(error) {
      console.log(error.message);
    }
  }

  /* 파이어베이스 유저 컬렉션 생성 기능 */
  async function addUserCollection(uid, name, mobile, email, birthday, profileImageURL) {
    await setDoc(doc(db, "users", uid), {
      name: name,
      mobile: mobile,
      email: email,
      birthday: birthday,
      profileImageURL: profileImageURL,
    })
    setUid(uid);
    console.log("유저 컬렉션 생성 성공!");
  }

  return(
    <>
      <Helmet>
        <title>사자-회원가입</title>
        <meta name="description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
        <meta name="keywords" content="중고거래, 당근마켓, 멋쟁이사자처럼, 멋쟁이사자처럼프론트엔드" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="사자마켓" />
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:title" content="사자마켓 회원가입" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.pinimg.com/originals/b9/7e/7f/b97e7fcf01f683802fa0ebb51d05b696.jpg" />
        <meta property="og:description" content="사자마켓-중고 거래 장터 whit.프론트엔도" />
      </Helmet>
      <Header></Header>
      <StyledMain>
        <Heading2>회원가입</Heading2>
        <p className="registerInformation">
          <sup>*</sup>필수입력사항
        </p>
        <RegisterForm />
        <RegisterTerms />
        <Button className="registerButton" onClick={handleCheckRegister}>가입하기</Button>
      </StyledMain>
      <Footer></Footer>
    </>
  );
}

const StyledMain = styled.main`
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
    background: #6c816d;
    border: 1px solid #6c816d;
    color: #fff;
    cursor: pointer;
    margin: 40px 0 80px 0;
  }
`;
