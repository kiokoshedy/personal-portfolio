import { Sun, Moon } from "react-bootstrap-icons";
import { useTheme, DARK } from "../context/ThemeContext";

export const ThemeToggle = ({ compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === DARK;
  const Icon = isDark ? Sun : Moon;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      className={compact ? "theme-toggle compact" : "theme-toggle"}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      data-theme-state={theme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <Icon size={15} />
      </span>
      {!compact && (
        <span className="theme-toggle-label">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
};
