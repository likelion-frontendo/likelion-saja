import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`