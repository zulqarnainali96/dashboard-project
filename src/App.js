import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'

import './App.css';
const [theme, colorMode] = useMode();

function App() {
  return (
    <ColorModeContext value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className='content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext>
  );
}

export default App;
