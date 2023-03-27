import styled from 'styled-components/macro';

export function RegisterModal({children, ...rest}) {
  return (
    <StyledModal className="modal">
      <div className="modal-content">
        <button className="close" {...rest}>확인</button>
        <p>{children}</p>
      </div>
    </StyledModal>
  );
}

const StyledModal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
    
  & .modal-content {
    width: 360px;
    height: 140px;
    background-color: white;
    padding: 24px;
    border-radius: 16px;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    position: relative;
  }

  & .close {
    position: absolute;
    top: 105px;
    right: 24px;
    color: #6C816D;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`