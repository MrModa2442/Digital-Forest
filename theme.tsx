// theme.tsx
import React, { createContext, useState, useContext, useEffect, useMemo, FC, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeName = 'forest' | 'sunset' | 'misty';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = window.localStorage.getItem('app-theme');
      return (savedTheme === 'dark') ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [themeName, setThemeNameState] = useState<ThemeName>(() => {
    try {
      const savedThemeName = window.localStorage.getItem('app-color-theme');
      return (savedThemeName && ['forest', 'sunset', 'misty'].includes(savedThemeName)) ? savedThemeName as ThemeName : 'forest';
    } catch {
      return 'forest';
    }
  });


  useEffect(() => {
    const root = window.document.documentElement;
    // Handle light/dark mode
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem('app-theme', theme);
    } catch (error) {
      console.error("Could not save theme to localStorage:", error);
    }

    // Handle color theme
    root.setAttribute('data-theme', themeName);
     try {
      window.localStorage.setItem('app-color-theme', themeName);
    } catch (error) {
      console.error("Could not save color theme to localStorage:", error);
    }

  }, [theme, themeName]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const setThemeName = (newThemeName: ThemeName) => {
    setThemeNameState(newThemeName);
  }

  const contextValue = useMemo(() => ({ theme, toggleTheme, themeName, setThemeName }), [theme, themeName]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};