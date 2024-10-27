import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    font-family: "Montserrat";
    margin: auto;
    word-break: keep-all;
    transition: 0.2s;
    @media (max-width: 960px) {
      padding: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  strong{
    font-weight: 600;
  }
`;

export default GlobalStyle;
