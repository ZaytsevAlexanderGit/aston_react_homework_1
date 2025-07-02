import React, { createContext, useState } from 'react';

type TThemeContextProviderProps = {
  children: React.ReactNode;
};

type TTheme = 'dark' | 'light';

type TThemeContext = {
  theme: TTheme;
  setTheme: React.Dispatch<React.SetStateAction<TTheme>>;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

export function ThemeContextProvider({ children }: TThemeContextProviderProps) {
  const [theme, setTheme] = useState<TTheme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
