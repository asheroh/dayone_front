import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { theme } from './Theme';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </ThemeProvider>
    </>
  );
}

export default App;
