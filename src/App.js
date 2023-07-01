import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { useState } from 'react';
import { useEffect } from 'react';
import { dark, light } from './Theme';

function App() {
  // User Theme----------------------------------------
  const [themeMode, setThemeMode] = useState(false);

  // User LoggedIn-------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // user Default theme 가져오기
  }, []);

  const theme = themeMode ? light : dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
