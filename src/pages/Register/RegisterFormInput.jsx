import { useId } from 'react'
import styled from 'styled-components'
import {RegisterLabel} from "@/pages/Register"

export function RegisterFormInput({label, name, type, children, ...rest}){

  const uniqueId = useId()

  return(
    <StyledDiv className="formInput">
      <RegisterLabel name={`${uniqueId}-${name}`}>{label}<sup>*</sup></RegisterLabel>
      <input id={`${uniqueId}-${name}`} name={name} type={type} {...rest}/>
      {children}
    </StyledDiv>
  )
}

const StyledDiv = styled.div `
  display: flex;
  align-items: center;
  margin: 40px 0;

  & input {
    width: 333px;
    height: 44px;
    margin-right: 8px;
    font-size: 16px;
    padding: 9px 0 9px 20px;
    color: #898989;
  }

  & button {
    width: 143px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    background: transparent;
    border: 1px solid #6C816D;
    cursor: pointer;
  }
`