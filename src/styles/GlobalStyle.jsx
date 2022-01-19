import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
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

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
  }
`;

export default GlobalStyles;
