import {useState} from "react";
import styled from "styled-components/macro";
import {Button} from "@/components/Button/Button";
import {Input} from "@/components/Input/Input";
import {ReactComponent as RightArrow} from "@/assets/Post/right.svg";
import {useRecoilState} from "recoil";
import {postcodePopupAtom, addressAtom, priceAtom, imagesAtom, imageListAtom, postTitleAtom, postContentAtom} from "./postAtoms";
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/app';
import {useNavigate} from "react-router-dom";

export function PlaceSearchBox() {
  const [postcodePopup, setPostcodePopup] = useRecoilState(postcodePopupAtom);
  const [address, setAddress] = useRecoilState(addressAtom);
  const [images, setImages] = useRecoilState(imagesAtom);
  const [imageList, setImageList]  = useRecoilState(imageListAtom);
  const [priceValue, setPriceValue] = useRecoilState(priceAtom);
  const [postTitle, setPostTitle] = useRecoilState(postTitleAtom);
  const [postContent, setPostContent] = useRecoilState(postContentAtom);
  const moveToAnotherPage  = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    handlePostSubmit();
  }

  const handlePostSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "Products"), {
        description: postContent,
        imgUrl: imageList,
        location: address,
        price: priceValue,
        title: postTitle,
      });
      console.log("Document written with ID: ", docRef.id);
      moveToAnotherPage("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  

  const handlePostcodePopup = () => {
    if (!postcodePopup) {
      const script = document.createElement("script");
      script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.onload = () => {
        const newPostcodePopup = new window.daum.Postcode({
          oncomplete: (data) => {
            setAddress(data.address);
            setPostcodePopup(null);
          },
        });
        newPostcodePopup.open();
        setPostcodePopup(newPostcodePopup);
      };
      document.head.appendChild(script);
    } else {
      postcodePopup.open();
    }
  };

  return (
    <PlaceSearch>
      <div className="PlaceSearchInputBox">
        <Input value={address || "거래장소 선택하기"} onClick={handlePostcodePopup} />
        <Button onClick={handlePostcodePopup}>
          장소 선택 <RightArrow className="RightArrow"></RightArrow>
        </Button>
      </div>
      <div className="UploadBtnBox">
        <Button className="CancleBtn">취소</Button>
        <Button className="SubmitBtn" onClick={onSubmit}>등록</Button>
      </div>
    </PlaceSearch>
  );
}

const PlaceSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  & .PlaceSearchInputBox {
    position: relative;
  }

  & .PlaceSearchInputBox Input {
    width: 528px;
    height: 40px;
    border: 0;
    border-bottom: 2px solid #a5b2a6;
    color: #393a40;
    padding-left: 12px;
  }

  & .PlaceSearchInputBox Button {
    border: 0;
    background-color: #fff;
    color: #6c816d;
    width: 100px;
    position: absolute;
    right: 0px;
    top: 10px;
  }

  & .PlaceSearchInputBox Button .RightArrow {
    fill: #6c816d;
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-left: 4px;
  }

  & .UploadBtnBox Button {
    width: 120px;
    height: 40px;
    border-radius: 12px;
    border: 0;
    margin-left: 18px;
    color: #fff;
  }

  & .UploadBtnBox .CancleBtn {
    background-color: #eca997;

    &:hover {
      background-color: #f8e1db;
    }
  }

  & .UploadBtnBox .SubmitBtn {
    background-color: #6c816d;

    &:hover {
      background-color: #a5b2a6;
    }
  }
`;