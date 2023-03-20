import styled from 'styled-components'

export function Heading3({children, ...rest}) {
  return(
    <StyledHeading3 {...rest}>{children}</StyledHeading3>
  )
}

const StyledHeading3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
`
