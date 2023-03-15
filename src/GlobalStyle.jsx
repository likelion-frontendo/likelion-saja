import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`