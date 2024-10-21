import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    box-sizing: border-box;
    font-family: "Montserrat";
    margin: auto;
    word-break: break-word;
    @media (max-width: 960px) {
      padding: 20px;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
