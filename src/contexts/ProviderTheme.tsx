import { useState } from "react";
import { ContextTheme } from "./ContextTheme";
import type { ThemeType } from "../types/Theme";

export const ProviderTheme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const th: ThemeType = prefersDark ? "dark" : "light";
    const d = document.documentElement;
    d.setAttribute("data-theme", th);
    return th;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      const d = document.documentElement;
      d.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  const setThemeValue = (newTheme: ThemeType) => {
    setTheme(newTheme);
    const d = document.documentElement;
    d.setAttribute("data-theme", newTheme);
  };

  return (
    <ContextTheme.Provider
      value={{ theme, toggleTheme: toggleTheme, setTheme: setThemeValue }}
    >
      {children}
    </ContextTheme.Provider>
  );
};
