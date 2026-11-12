import { createContext } from 'react';

export const Theme = {
  light: 'light',
  dark: 'dark',
};

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext({});

export const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light;
};
