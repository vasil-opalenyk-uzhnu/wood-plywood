import { useEffect, useState } from 'react';

import { getSystemTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '@/shared/lib/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || getSystemTheme();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = `${theme}`;
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
