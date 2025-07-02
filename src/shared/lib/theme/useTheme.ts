import { ThemeContext } from './ThemeContext.tsx';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeContext.Provider');
  }
  return context;
}
