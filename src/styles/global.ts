import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: 0;
  };
  html {
    background: #F2F2FA;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-size: 16px;
  };

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1rem;
  };

  button {
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
  }

  h1, h2, p {
    color: #3A3A3A;
  }

  p {
    font-size: 1rem;
    line-height: 145%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
