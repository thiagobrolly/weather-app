import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { MainProps, ThemeContextData } from './types';
import { lightTheme } from '../styles/theme/lightTheme';
import { defaultTheme } from '../styles/theme/default';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('weatherApp:theme');
    if (savedTheme === 'light') {
      setTheme(lightTheme);
    } else {
      setTheme(defaultTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme.title === 'light') {
      setTheme(defaultTheme);
      localStorage.setItem('weatherApp:theme', 'dark');
    } else if (theme.title === 'dark') {
      setTheme(lightTheme);
      localStorage.setItem('weatherApp:theme', 'light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
