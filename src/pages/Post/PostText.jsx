import {useState} from "react";
import {Input} from "@/components/Input/Input";
import styled from "styled-components/macro";

export function PostText() {
  const [PriceValue, setPriceValue] = useState(0);

  function addComma(price) {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  }
  function onChangePoints(e) {
    const inputText = e.target.value;
    const {value} = e.target;
    const fillteredText = inputText.replace(/[^0-9]/g, "");
    let str = value.replaceAll(",", "");
    setPriceValue(str);
    setPriceValue(fillteredText);
  }

  return (
    <TextBox>
      <div className="TextTitleInput">
        <Input placeholder="글 제목" className="TextTitle"></Input>
        <div className="PriceBox">
          <span style={{color: PriceValue ? "#4d5159" : "#dcdee3"}}>벨</span>
          <Input value={addComma(PriceValue || "")} placeholder="가격" onChange={onChangePoints} className="TextPrice" pattern="\d*" maxlength="12"></Input>
        </div>
      </div>
      <textarea placeholder=" 게시글의 내용을 적어주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)" className="TextareaBox"></textarea>
    </TextBox>
  );
}

const TextBox = styled.div`
  & .TextTitleInput {
    display: flex;
    margin-top: 24px;
  }

  & .PriceBox {
    display: flex;
    align-items: center;
    position: relative;

    & span {
      position: absolute;
      left: 40px;
      font-weight: 600;
    }
  }

  & Input {
    border: 2px solid #a5b2a6;
    padding-left: 16px;
    &:focus {
      outline: none;
    }
  }

  & textarea {
    padding: 24px;
    border: 2px solid #a5b2a6;
    &:focus {
      outline: none;
    }
  }

  & .TextTitle {
    width: 576px;
    height: 40px;
    border-radius: 8px;
  }

  & .TextPrice {
    width: 456px;
    height: 40px;
    border-radius: 8px;
    margin-left: 24px;
    padding-left: 34px;
  }

  & .TextareaBox {
    width: 1056px;
    height: 400px;
    border-radius: 8px;
    margin-top: 24px;
  }
`;
