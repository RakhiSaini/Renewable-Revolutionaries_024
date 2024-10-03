// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  .App {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyles;
