import {Button} from "@/components";
import styled from 'styled-components';
import {ReactComponent as CheckIcon} from "@/assets/Register/checkbutton-off.svg";
import { useRecoilValue, atom } from 'recoil';
import { checkAllAtoms } from './RegisterTerms';

export function RegisterCheckListItem({content, onClick, children, ...rest}) {

  const check = useRecoilValue(checkAllAtoms);

  return(
    <StyledLi>
      <Button onClick={onClick}><CheckIcon className="check" fill={check === true ? 'green' : 'gray'} /></Button>
      <span{...rest}>{content}</span>
      {children}
    </StyledLi>
  )
}

const StyledLi = styled.li`
  display: flex;
  align-items: center;

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