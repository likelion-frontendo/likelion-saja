import PropTypes from 'prop-types';
import styled from 'styled-components'

export function Form({action="/", method="post", legend, children, ...rest}) {
  return (
    <StyledForm action={action} method={method} {...rest}>
      <fieldset>
        <legend className="a11yHidden">{legend}</legend>
      </fieldset>
      {children}
    </StyledForm>
  )
}

Form.prototype = {
  action: PropTypes.string,
  method: PropTypes.string,
  legend: PropTypes.string
}

const StyledForm = styled.form`
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