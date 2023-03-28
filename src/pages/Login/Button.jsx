import styled from "styled-components/macro";

export function Button({children, onClick}) {
  return (
    <StyledButton>
      <button onClick={onClick}>
        {children}
      </button>
    </StyledButton>
  );
}

const StyledButton = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;

    & button {
      height: 54px;
      width: 340px;
      line-height: 54px;
      border-radius: 4px;
      user-select: none;
      border: none;
      cursor: pointer;  
      margin:0 auto;
      font-size: 16px;
      font-weight: 600;
      background-color: #6C816D;
      color: #fff;
    }
`;