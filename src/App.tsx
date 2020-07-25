import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Board from './components/Board';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <Board />
        <GlobalStyle />
      </ThemeProvider>
    </DndProvider>
  );
};

export default App;
