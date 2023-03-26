// import {RegisterCheckListItem} from '@/pages/Register'
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {checkedAllAtom, checkedTermsAtom, checkedAgeAtom, checkedMarketingAtom} from './atoms/termsAtoms';
import styled from 'styled-components'
import {Button, Label, Heading3} from "@/components";
import {ReactComponent as CheckIcon} from "@/assets/Register/checkbutton-off.svg";
import {ReactComponent as ChevronRightIcon} from "@/assets/Register/chevron-right.svg"


export function RegisterTerms() {
  
  const [checkedAll, setCheckedAll] = useRecoilState(checkedAllAtom);
  const [checkedTerms, setCheckedTerms] = useRecoilState(checkedTermsAtom);
  const [checkedAge, setCheckedAge] = useRecoilState(checkedAgeAtom);
  const [checkedMarketing, setCheckedMarketing] = useRecoilState(checkedMarketingAtom);

  useEffect(()=>{
    setCheckedAll(checkedTerms && checkedAge && checkedMarketing);
  }, [checkedTerms, checkedAge, checkedMarketing]);

  function handleCheckedAll() {
    setCheckedAll(!checkedAll);
    setCheckedTerms(!checkedAll);
    setCheckedAge(!checkedAll);
    setCheckedMarketing(!checkedAll);
  }

  function handleCheckedTerms() {
    setCheckedTerms(!checkedTerms);
  };
  
 function handleCheckedAge() {
    setCheckedAge(!checkedAge);
  };
  
  function handleCheckedMarketing() {
    setCheckedMarketing(!checkedMarketing);
  };

  return(
    <StyledSection>
      <Heading3>
        <Label className="registerLabel">이용약관동의<sup>*</sup></Label>
      </Heading3>
      <ul className="checkList">
        <li className="checkListItem">
          <Button><CheckIcon className={checkedAll ? 'check fill' : 'check'} onClick={handleCheckedAll}/></Button>
          <span className="checkAll" >모두 동의</span>
        </li>
        <li className="checkListItem">
          <Button><CheckIcon className={checkedTerms ? 'check fill' : 'check'} onClick={handleCheckedTerms}/></Button>
          <span className="checkOne">(필수) 이용약관 및 동의사항</span>
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </li>
        <li className="checkListItem">
          <Button><CheckIcon className={checkedAge ? 'check fill' : 'check'} onClick={handleCheckedAge}/></Button>
          <span className="checkOne">(필수) 본인은 만 14세 이상입니다</span>
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </li>
        <li className="checkListItem">
          <Button><CheckIcon className={checkedMarketing ? 'check fill' : 'check'} onClick={handleCheckedMarketing}/></Button>
          <span className="checkOne">(선택) 마케팅 정보 수신 동의</span>
          <Button className="detailsButton">약관보기<ChevronRightIcon /></Button>
        </li>
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

  & .checkListItem {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }

  & .check {
    position: absolute;
    cursor: pointer;
  }

  & .fill {
    fill: #6C816D;
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

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 24px;
    height: 24px;
    border: none;
    margin-right: 8px;
    background: transparent;
  }
`