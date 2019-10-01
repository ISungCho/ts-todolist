//https://velog.io/@yesdoing/TypeScript-with-React-Redux-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-k5jsis62ah

import React, { useState } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/my-theme';
import Switch from './styled-components/Switch';

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.defaultFont};
  }
`

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  const onChange = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <Switch checked={isDarkMode} onChange={onChange} />
        <GlobalStyle {...isDarkMode ? darkTheme : lightTheme} />
        <TodoListContainer />
      </>
    </ThemeProvider>
  );
}

export default App;