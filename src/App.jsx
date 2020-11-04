import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import Container from './components/layouts/Container';
import theme from './theme/app-theme'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container />
    </ThemeProvider>
  );
}

export default App;
