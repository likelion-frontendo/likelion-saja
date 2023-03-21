import {useState} from "react";
import {Input} from "@/components/Input/Input";
import styled from "styled-components/macro";

export function PostText() {
  const [InputPrice, setInputPrice] = useState("");

  function handleInputChange(e) {
    setInputPrice(e.target.value);
  }

  return (
    <TextBox>
      <div className="TextTitleInput">
        <Input placeholder="글 제목" className="TextTitle"></Input>
        <div className="PriceBox">
          <span style={{color: InputPrice ? "#000" : "#dcdee3"}}>₩</span>
          <Input pattern="[0-9]*" value={InputPrice} placeholder="가격" onChange={handleInputChange} className="TextPrice"></Input>
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
    }
  }

  & Input {
    border: 1px solid #6c816d;
    padding-left: 16px;
  }

  & textarea {
    padding: 24px;
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
    padding-left: 40px;
  }

  & .TextareaBox {
    width: 1056px;
    height: 400px;
    border-radius: 8px;
    margin-top: 24px;
  }
`;
