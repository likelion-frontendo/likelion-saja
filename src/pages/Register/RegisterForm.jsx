import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { emailAtom, passwordAtom, passwordConfirmAtom, nameAtom, mobileAtom, birthdayAtom, profileImageAtom, profileImageURLAtom, currentUserAtom } from './atoms/inputValueAtoms';
import { emailVisibleAtom, passwordVisibleAtom, passwordConfirmVisibleAtom, nameVisibleAtom, mobileVisibleAtom } from './atoms/checkInputValueAtom';
import { nameWarningAtom, emailWarningAtom, passwordWarningAtom, passwordConfirmWarningAtom, mobileWarningAtom } from './atoms/inputWarningAtoms';
import styled from 'styled-components'
import { db, storage } from "@/firebase/app";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {RegisterFormInput} from "@/pages/Register"
import {Form, Button, Label, Heading3} from "@/components";
import { collection, getDocs } from 'firebase/firestore';

export function RegisterForm() {

  const [email, setEmail] = useRecoilState(emailAtom);
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passwordConfirmAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [mobile, setMobile] = useRecoilState(mobileAtom);
  const [birthday, setBirthday] = useRecoilState(birthdayAtom);
  const [profileImageURL, setProfileImageURL] = useRecoilState(profileImageURLAtom);
  const [profileImage, setProfileImage] = useRecoilState(profileImageAtom);

  const [emailVisible, setEmailVisible] = useRecoilState(emailVisibleAtom);
  const [passwordVisible, setPasswordVisible] = useRecoilState(passwordVisibleAtom);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useRecoilState(passwordConfirmVisibleAtom);
  const [mobileVisible, setMobileVisible] = useRecoilState(mobileVisibleAtom);
  const [nameVisible, setNameVisible] = useRecoilState(nameVisibleAtom);

  const [emailWarning, setEmailWarning] = useRecoilState(emailWarningAtom);
  const [passwordWarning, setPasswordWarning] = useRecoilState(passwordWarningAtom);
  const [passwordConfirmWarning, setPasswordConfirmWarning] = useRecoilState(passwordConfirmWarningAtom);
  const [mobileWarning, setMobileWarning] = useRecoilState(mobileWarningAtom);
  const [nameWarning, setNameWarning] = useRecoilState(nameWarningAtom);

  function emailValidation(email){
    const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    let warningMessage = '';

    if(!emailRegex.test(email)) {
      warningMessage="올바른 이메일 형식이 아닙니다"
      setEmailWarning(warningMessage);
      setEmailVisible(true);
    } else {
      setEmailVisible(false);
    };
  }

  function passwordValidation(password) {

    let warningMessage = '';

    if (password.length < 7) {
      warningMessage = '비밀번호는 최소 8자리여야 합니다';
      setPasswordVisible(true);
      setPasswordWarning(warningMessage);
    } else {
      setPasswordVisible(false);
    }
  }

  function passwordConfirmValidation(passwordConfirm) {
    let warningMessage = '';

    if(passwordConfirm !== password) {
      setPasswordConfirmVisible(true);
      warningMessage = "비밀번호가 다릅니다!";
      setPasswordConfirmWarning(warningMessage);
    } else {
      setPasswordConfirmVisible(false);
    }
  }

  function nameValidation(name) {
    const nameRegex = /^[가-힣]{2,5}$/;
    let warning = "";
    if(!nameRegex.test(name)) {
      warning = "올바른 이름이 아닙니다";
      setNameWarning(warning);
      setNameVisible(true);
    } else {
      setNameVisible(false);
    }
  }

  function mobileValidation(mobile) {
    const mobileRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    let warning = '';
    
    if(!mobileRegex.test(mobile)) {
      warning = '올바른 휴대폰 형식이 아닙니다';
      setMobileWarning(warning);
      setMobileVisible(true);
    } else {
      setMobileVisible(false);
    }
  }

  function handleMobileValidation(e) {
    const mobile = e.target.value;
    const numberOnly = /^[0-9]*$/;
    let warning = '';

    if(!numberOnly.test(mobile)) {
      e.target.value = mobile.slice(0, -1);
      warning = '숫자만 입력이 가능합니다';
      setMobileWarning(warning);
      setMobileVisible(true);
      return;
    }

    setMobile(mobile);
  }

  function handleBirthdayValue(e) {
    setBirthday(e.target.value);
    console.log(birthday);
  }

  function checkExistingUser() {
    const colRef = collection(db, "users");

    getDocs(colRef)
    .then((snapshot) => {
      let existingUsers = [];
      snapshot.docs.forEach((doc)=>{
        existingUsers.push({...doc.data(), id: doc.id})
      })
      existingUsers.forEach((user)=>{
        if(email === user.email) {
          alert("이미 가입이 완료된 이메일입니다!");
          return;
        }
      })
    })
    .catch((err) => {
      console.log(err.message);
    })
  }


  useEffect(() => {
    function uploadFile() {
      const name = new Date().getTime() + profileImage.name;
      const storageRef = ref(storage, 'profiles/' + name);
      const uploadTask = uploadBytesResumable(storageRef, profileImage);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
              default:
                break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfileImageURL(downloadURL);
          });
        }
      );
    }
    profileImage && uploadFile();
  }, [profileImage]);

  useEffect(() => {
    emailValidation(email);
  }, [email]);

  useEffect(() => {
    passwordValidation(password);
  }, [password]);

  useEffect(() => {
    passwordConfirmValidation(passwordConfirm);
  }, [passwordConfirm]);

  useEffect(() => {
    nameValidation(name);
  }, [name]);

  useEffect(() => {
    mobileValidation(mobile);
  }, [mobile]);

  return(
    <StyledSection className="registerTop">
      <Form className="registerForm" legend="회원가입">
        <RegisterFormInput label="이메일" name="email" type="email" placeholder="예시) frontendo@saja.com" onChange={(e) => {setEmail(e.target.value);}}>
          <Button className="registerButtonShort" onClick={checkExistingUser}>중복확인</Button>
          <span className={emailVisible === true ? "registerWarning showWarning" : "registerWarning"}>{emailWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호" name="password" type="password" placeholder="비밀번호를 입력해주세요" onChange={(e)=>{setPassword(e.target.value);}}>
          <span className={passwordVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="비밀번호 확인" name="password" type="password" placeholder="비밀번호를 한번 더 입력해주세요" onChange={(e) => {setPasswordConfirm(e.target.value);}}>
          <span className={passwordConfirmVisible === true ? "registerWarning showWarning" : "registerWarning"}>{passwordConfirmWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="이름" name="name" type="text" placeholder="이름을 입력해주세요" onChange={(e) => {setName(e.target.value);}}>
          <span className={nameVisible === true ? "registerWarning showWarning" : "registerWarning"}>{nameWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="휴대폰" name="mobile" type="text" placeholder="숫자만 입력해주세요" maxLength="11" onChange={handleMobileValidation}>
          <Button className="registerButtonShort">인증번호 받기</Button>
          <span className={mobileVisible === true ? "registerWarning showWarning" : "registerWarning"}>{mobileWarning}</span>
        </RegisterFormInput>
        <RegisterFormInput label="생년월일" name="year" type="date" onChange={handleBirthdayValue}/>
        <div className="registerFormInput">
          <Heading3 className="registerHeading">
            <Label className="registerLabel">프로필 사진<sup>*</sup></Label>
          </Heading3>
          <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        </div>
      </Form>
  </StyledSection>
  )
}

const StyledSection = styled.section`
  border-top: 2px solid #6C816D;

  & .registerFormInput {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;
    padding: 20px 0;
    position: relative;
  }

  & .registerLabel {
    display: inline-block;
    width: 139px;
    margin-right: 8px;
  }

  & .registerLabel > sup {
    color: red;
    position: relative;
    bottom: 5px;
    left: 5px;
  }

  & .registerInput {
    width: 333px;
    height: 44px;
    margin-right: 8px;
    font-size: 16px;
    padding: 9px 20px;
  }

  & .registerButtonShort {
    width: 143px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #6C816D;
    cursor: pointer;
  }

  & .registerButtonLong {
    width: 333px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #6C816D;
    cursor: pointer;
  }

  & .registerWarning {
    display: none;
    position: absolute; 
    left: 150px;
    top: 75px;
    color: red;
  }

  & .showWarning {
    display: block;
  }
`