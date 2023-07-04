import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { useState } from 'react';
import { useEffect } from 'react';
import { dark, light } from './Theme';
import { Context } from './context/Context';

function App() {
  // User Theme----------------------------------------
  const [themeMode, setThemeMode] = useState('black');

  // User LoggedIn-------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // user Default theme 가져오기
  }, []);

  const theme = themeMode === 'white' ? light : dark;

  return (
    <>
      <Context.Provider value={{ themeMode, setThemeMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}

export default App;
