import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}        
  
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: pretendard, sans-serif !important;
  }


  h1, h2, h3, h4 {
    font-weight: 700;
    color: #272520;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
  }
  h2 {
    font-size: 36px;
    line-height: 43px;
  }
  h3 {
    font-size: 30px;
    line-height: 36px;
  }
  h4 {
    font-size: 24px;
    line-height: 29px;
  }

`;
