import styled from 'styled-components';

export function Button({type="button", children, ...rest }) {
  return <StyledButton type={type} {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  color: #fff;
  background-color: #a5b2a6;
  &:hover {
    background-color: #6c816d;
  }
`