import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';
// import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
