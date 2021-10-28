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
  @font-face {
    font-family: TTNorms-Medium;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('TTNorms-Medium'),
      url(/fonts/TTNorms-Medium.woff2) format('woff2');
  }
  @font-face {
    font-family: TTNorms-Bold;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('TTNorms-Bold'),
      url(/fonts/TTNorms-Bold.woff2) format('woff2');
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    font-size: 62.5%;
    @media ${({ theme }) => theme.media.mobile} {
    font-size: 50%;
    }
  }
 
  body {
    font-family: 'TTNorms-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 1440px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: normal;
    font-variant-ligatures: no-common-ligatures;
  }
  button{
    font-family: 'TTNorms-Medium';
  }
  h1,h2,h3,h4,h5{
    font-family: 'TTNorms-Medium';
    font-weight: 500;
    text-rendering: optimizeLegibility;
    line-height: 1;
    margin: 1rem 0;
    letter-spacing: normal;
   
  }
  a,
  p {
    font-size: 1.8rem;
  }
  h1 {
    font-size: 9.0rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    font-size: 4rem;
  }
  h4 {
    font-size: 2.8rem;
  }
  h5 {
    font-size: 1.8rem;
  }
  h6 {
    font-family: 'TTNorms-Bold';
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
  }
  a:any-link {
    color: ${({ theme }) => theme.colors.primary};
  }
  a {
  text-decoration: none;
  }
`;
