import {Button} from "@/components";
import styled from 'styled-components';
import {ReactComponent as CheckIcon} from "@/assets/Register/checkbutton-off.svg";


export function RegisterCheckListItem({content, children, ...rest}) {
  return(
    <StyledLi>
      <Button><CheckIcon className="check" /></Button>
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