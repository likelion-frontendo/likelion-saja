import styled from 'styled-components'

export function Heading1({children, ...rest}) {
  return(
    <StyledHeading1 {...rest}>{children}</StyledHeading1>
  )
}

const StyledHeading1 = styled.h1`
  font-size: 28px;
  font-weight: 600;
`