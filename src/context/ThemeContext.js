import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const THEME_STORAGE_KEY = "sk-portfolio-theme";
export const DARK = "dark";
export const LIGHT = "light";

const ThemeContext = createContext({
  theme: DARK,
  toggleTheme: () => {},
});

export const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return DARK;
  }

  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === LIGHT || stored === DARK) {
      return stored;
    }
  } catch {
    // storage unavailable (private mode) — fall through to system preference
  }

  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? LIGHT
    : DARK;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage failures
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === DARK ? "#121214" : "#ffffff");
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === DARK ? LIGHT : DARK)),
    []
  );

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
