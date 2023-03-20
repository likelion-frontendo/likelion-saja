import {RegisterCheckListItem} from '@/pages/Register'
import {Button, Label, Heading3} from "@/components";
import {ReactComponent as ChevronRightIcon} from "@/assets/Register/chevron-right.svg"
import styled from 'styled-components'

export function RegisterTerms() {
  return(
    <StyledSection>
      <Heading3>
        <Label className="registerLabel">이용약관동의<sup>*</sup></Label>
      </Heading3>
      <ul className="checkList">
        <RegisterCheckListItem className="checkAll" content="모두 동의" />
        <RegisterCheckListItem className="checkOne" content="(필수) 이용약관 및 동의사항">
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </RegisterCheckListItem>
        <RegisterCheckListItem className="checkOne" content="(선택) 마케팅 정보 수신 동의">
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </RegisterCheckListItem>
        <RegisterCheckListItem className="checkOne" content="(필수) 본인은 만 14세 이상입니다.">
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </RegisterCheckListItem>
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid #6C816D;
  position: relative;
  width: 640px;

  & .registerLabel {
    display: inline-block;
    width: 139px;
    margin-right: 8px;
    position: relative;
    bottom: 84px;
  }

  & .registerLabel > sup {
    color: red;
    position: relative;
    bottom: 5px;
    left: 5px;
  }

  & .checkList {
    margin: 40px 0;
  }

  & .checkList > li {
    margin-bottom: 24px;
  }

  & .check {
    position: absolute;
    cursor: pointer;
  }

  & .checkAll {
    font-size: 22px; 
    font-weight: 600;
  }

  & .checkOne {
    font-size: 16px; 
    font-weight: 400;
    color: #333333;
  }

  & .detailsButton {
    width: 70px;
    height: 27px;
    font-size: 12px;
    color: #6C816D;
    position: absolute;
    right: 60px;
    cursor: pointer;
  }

  & .detailsButton > svg {
    margin-left: 4px;
    height: 10px;
    width: 10px;
  }
`