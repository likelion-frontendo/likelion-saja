import styled from 'styled-components'

export function RegisterForm({action="/", method="post", legend, children, ...rest}) {
  return (
    <StyledForm action={action} method={method} {...rest}>
      <fieldset>
        <legend className="a11yHidden">{legend}</legend>
      </fieldset>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form `
  
  border-top: 2px solid #6C816D;

  & .a11yHidden {
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
`
