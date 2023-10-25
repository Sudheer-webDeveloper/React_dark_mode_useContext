import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ToggleButton from './ToggleButton';
import { useTheme } from './ThemeContext';
import './app.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ToggleButton />
        <Content />
      </div>
    </ThemeProvider>
  );
}

function Content() {
  const { darkMode } = useTheme();
  console.log("darkmode", darkMode)

  return (
    <div className={`content ${darkMode ? 'dark' : 'light'}`}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>This is some content.</p>
    </div>
  );
}

export default App;
