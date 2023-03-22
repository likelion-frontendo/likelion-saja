import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    
    * {
      box-sizing: inherit;
      font-family: inherit;

      &::after, 
      &::before {
        box-sizing: inherit;
        font-family: inherit;
      }
    }

    a {
      text-decoration: none; 
    }

    button {
      cursor: pointer;
    }
  }
`;