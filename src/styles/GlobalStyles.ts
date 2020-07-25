import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: ${(props) => props.theme.colors.background};
    color:  ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`;
