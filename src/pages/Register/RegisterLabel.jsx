import styled from 'styled-components';

export function RegisterLabel({name, label, children, ...rest}) {
  return(
    <StyledLabel htmlFor={name}>{label}{children}</StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: inline-block;
  width: 139px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333333;

  & sup {
    color: red;
    position: relative;
    bottom: 5px;
    left: 5px;
  }
`