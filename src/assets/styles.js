import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap');
  * {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      color: #221924;
      box-sizing: border-box;
  }
  h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 25px;
      font-weight: 900;
      line-height: 1.25;
  }
  body {
      display: block;
      background-color: #3f1052;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
  }
  html {
      scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
