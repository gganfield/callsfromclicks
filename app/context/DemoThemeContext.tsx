"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

const DemoThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });

export function DemoThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <DemoThemeContext.Provider
      value={{ theme, toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}
    >
      {children}
    </DemoThemeContext.Provider>
  );
}

export function useDemoTheme() {
  return useContext(DemoThemeContext);
}
