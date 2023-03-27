import {Link} from "react-router-dom";
import {db} from "@/firebase/app";
import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {uidAtom} from "../Register/atoms/uidAtom";
import {useRecoilState} from "recoil";
import styled from "styled-components/macro";

export function SectionProfileInfo() {
  const [uid, setUid] = useRecoilState(uidAtom);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mobile, setMobile] = useState("");
  const [profileImageURL, setProfileImageURL] = useState("");
  const [docSnap, setDocSnap] = useState(null);

  useEffect(() => {
    async function getUserDataFromFirebase() {
      if (!uid) return;
      console.log(uid);
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setBirthday(docSnap.data().birthday);
        setMobile(docSnap.data().mobile);
        setProfileImageURL(docSnap.data().profileImageURL);
      } else {
        // doc.data() will be undefined in this case
        console.log("유저 정보를 찾지 못했습니다.");
      }
      setDocSnap(docSnap);
    }

    getUserDataFromFirebase();
  }, [uid]);

  return (
    <ProfileInfoTop>
      <div className="InfoProfileImg">
        <img src={profileImageURL} alt="프로필 이미지"></img>
      </div>
      <div className="UserInfoList">
        <ul>
          <li>
            <span>이름</span>
          </li>
          <li>
            <span>이메일</span>
          </li>
          <li>
            <span>핸드폰 번호</span>
          </li>
          <li>
            <span>생년월일</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>{name}</span>
            <Link to="/">
              <span className="ProfileNum">#1817221</span>
            </Link>
          </li>
          <li>
            <span>{email}</span>
          </li>
          <li>
            <span>{mobile}</span>
          </li>
          <li>
            <span>{birthday}</span>
          </li>
        </ul>
      </div>
    </ProfileInfoTop>
  );
}

const ProfileInfoTop = styled.div`
  display: flex;
  margin: 40px 0 0 24px;

  & .InfoProfileImg img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }

  & .UserInfoList {
    display: flex;
  }

  & .UserInfoList ul {
    font-size: 16px;
    color: #4d5159;
    margin: auto 0 auto 16px;
  }

  & .UserInfoList ul:nth-child(1) {
    color: #6c816d;
    font-weight: 600;
    padding-left: 24px;
  }

  & .UserInfoList ul:nth-child(2) li {
    font-weight: 400;
  }

  & .UserInfoList ul li {
    margin-top: 8px;
  }

  & .ProfileNum {
    color: #868b94;
    margin-left: 8px;
  }
`;
