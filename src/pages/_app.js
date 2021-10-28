import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
