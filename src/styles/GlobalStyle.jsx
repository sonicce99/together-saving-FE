import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
       display: none; 
    }
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 20px;
    letter-spacing: -0.5px;
    border: 1px solid #f8f8f8;

    &::-webkit-scrollbar {
    display: none;
  }

  }

  a {
    text-decoration: none;
  }

  a:active, a:visited {
    color: inherit;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;
