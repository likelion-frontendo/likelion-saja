import styled from 'styled-components';

export function RegisterButton({type="button", children, ...rest }) {
  return <StyledButton type={type} {...rest}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    width: 143px;
    height: 44px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    color: #6C816D;
    background: transparent;
    border: 1px solid #6C816D;
    cursor: pointer;
`
