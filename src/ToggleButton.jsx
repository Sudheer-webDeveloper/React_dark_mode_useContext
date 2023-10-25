import React from 'react';
import { useTheme } from './ThemeContext';

function ToggleButton() {
  const { darkMode, toggleTheme } = useTheme();
  console.log("darkmode", darkMode, "togglemenu",toggleTheme )

  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ToggleButton;