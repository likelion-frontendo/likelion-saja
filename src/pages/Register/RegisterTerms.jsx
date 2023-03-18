import {RegisterButton, RegisterLabel} from '@/pages/Register'
import {ReactComponent as CheckIcon} from "@/assets/Register/checkbutton-off.svg";
import {ReactComponent as ChevronRightIcon} from "@/assets/Register/chevron-right.svg"
import styled from 'styled-components'

export function RegisterTerms() {
  return(
    <StyledSection>
      <RegisterLabel>이용약관동의<sup>*</sup></RegisterLabel>
      <div className="outerWrapper">
        <div className="innerWrapper">
          <RegisterButton><CheckIcon className="check" /></RegisterButton>
          <span style={{fontSize: '22px', fontWeight: 600}}>모두 동의</span>
        </div>
        <div className="innerWrapper">
          <RegisterButton><CheckIcon className="check" /></RegisterButton>
          <span style={{color: '#333333'}}>(필수) 이용약관 및 동의사항</span>
          <span className="details">약관보기<ChevronRightIcon /></span>
        </div>
        <div className="innerWrapper">
          <RegisterButton><CheckIcon className="check" /></RegisterButton>
          <span style={{color: '#333333'}}>(선택) 마케팅 정보 수신 동의</span>
          <span className="details">약관보기<ChevronRightIcon /></span>
        </div>     
        <div className="innerWrapper">
          <RegisterButton><CheckIcon className="check" /></RegisterButton>
          <span style={{color: '#333333'}}>본인은 만 14세 이상입니다. (필수)</span>
          <span className="details">약관보기<ChevronRightIcon /></span>
        </div>  
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  position: relative;

  & label {
    position: relative;
    bottom: 90px;
  }

  & .innerWrapper {
    display: flex;
    align-items: center;
    margin: 12px 0;
    padding: 12px 0;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 24px;
    height: 24px;
    border: none;
    margin-right: 8px;
  }

  & .check {
    position: absolute;
  }

  & .details {
    position: absolute;
    right: 60px;
    color: #6C816D
  }

  & .details > svg {
    margin-left: 4px;
    height: 12px;
    width: 12px;
  }
`