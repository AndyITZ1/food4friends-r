import {createContext, useContext, useState, useEffect} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Theme } from '@/utils/types/ThemeType';

type ThemeProviderState = {
  theme: Theme,
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme: Theme
  storageKey: string
}

export function ThemeProvider({
  children, 
  defaultTheme = "system", 
  storageKey = "vite-ui-theme"
} : ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage(storageKey, defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    console.log(theme);
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme])

  const value = {
    theme, 
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  }
  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}