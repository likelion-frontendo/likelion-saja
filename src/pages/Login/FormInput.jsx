import styled from 'styled-components/macro'

export function FormInput() {
  return (
    <StyledForm>
        <label htmlFor="아이디">아이디</label>
        <input value="" type="text" id="아이디" name="아이디" placeholder="아이디를 입력해주세요"></input>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  label {
    overflow: hidden;
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }

  input {
    width: 340px;
    height: 50px;
    font-size: 16px;
    padding-left: 20px;
    border: 1px solid A6A6A6;
    border-radius: 4px;
  }  
`