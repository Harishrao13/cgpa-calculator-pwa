"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeType = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: ThemeType;
  setTheme: (next: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as ThemeType) || "system";
  });

  useEffect(() => {
    let resolved = theme;
    if (theme === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.classList.toggle("dark", resolved === "dark");
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        document.documentElement.classList.toggle("dark", mq.matches);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  const setTheme = (next: ThemeType) => setThemeState(next);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside a ThemeProvider");
  return ctx;
};
