import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: TTNorms-Regular;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('TTNorms-Regular'),
      url(/fonts/TTNorms-Regular.woff2) format('woff2');
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  :root {
    --primary: #0B3B3C;
    --secondary: #7E0707;
    --tertiary: #6D8A83;
    --white: #ffffff;
    --blue: #00369e;
    --bg-1: #f8f9fc;
    --bg-2: #e2e4ee;
    --text-1: #83879b;
    --text-2: #1f2d48;
    --border-1: #83879b;
  }
  html{
    font-size: 62.5%;
  }
  body {
    font-family: 'TTNorms-Regular';
    max-width: 1440px;
    margin: 0 auto;
    background-color: var(--white);
  }
  h1,h2,h3,h4,h5{
    font-family: 'TTNorms-Regular';
  }
  a,
  p {
    font-size: 1.6rem;
  }
  h1 {
    font-size: 3.4rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4 {
    font-size: 2.2rem;
  }
  h5 {
    font-size: 1.8rem;
  }
  a:any-link {
    color: var(--primary);
  }
  a {
  text-decoration: none;
  }
`;
