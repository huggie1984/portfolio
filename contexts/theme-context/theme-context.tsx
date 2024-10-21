'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

const defaultContext = {
  mode: 'light', // Default to light mode
  toggleDarkMode: () => {},
};

const ThemeContext = createContext(defaultContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode == 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleDarkMode }}>
      <html lang="en" className={mode}>
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
