import styled from 'styled-components'

export function Heading2({children, ...rest}) {
  return(
    <StyledHeading2 {...rest}>{children}</StyledHeading2>
  )
}

const StyledHeading2 = styled.h2`
  font-size: 22px;
  font-weight: 600;
`