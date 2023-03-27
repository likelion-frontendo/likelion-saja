import {SidebarBottom} from "@/pages/Mypage/SidebarBottom";
import profile from "@/assets/Mypage/유네찌.png";
import styled from "styled-components/macro";
import {db} from "@/firebase/app";
import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {uidAtom} from "../Register/atoms/uidAtom";
import {useRecoilState} from "recoil";

export function SidebarTop() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImageURL, setProfileImageURL] = useState("");

  useEffect(() => {
    async function getUserDataFromFirebase() {
      const docRef = doc(db, "users", "mEh3O0OYmJdqw09hypXaiIMNIg73");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setProfileImageURL(docSnap.data().profileImageURL);
      } else {
        // doc.data() will be undefined in this case
        console.log("유저 정보를 찾지 못했습니다.");
      }
    }

    getUserDataFromFirebase();
  }, []);
  return (
    <MypageSide>
      <div className="profile">
        <img src={profileImageURL} alt="프로필 이미지"></img>
        <p className="profileName">{name}</p>
        <p className="profileNum">{email}</p>
      </div>
      <SidebarBottom></SidebarBottom>
    </MypageSide>
  );
}

const MypageSide = styled.div`
  position: sticky;
  top: 80px;
  width: 216px;
  height: 560px;

  & .profile {
    height: 220px;
    border: 1px solid #6c816d;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    text-align: center;
    padding-top: 24px;
  }

  & .profile img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  & .profile .profileName {
    margin-top: 16px;
    color: #6c816d;
    font-size: 16px;
    font-weight: 600;
  }

  & .profile .profileNum {
    margin-top: 8px;
    color: #868b94;
    font-size: 14px;
  }
`;
