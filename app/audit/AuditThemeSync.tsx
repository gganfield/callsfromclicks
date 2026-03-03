"use client";

import { useState, useEffect } from "react";

const THEME_STORAGE_KEY = "gg-theme";
type Theme = "dark" | "light";

export default function AuditThemeSync() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const inIframe = window.self !== window.top;
    const themeParam = url.searchParams.get("theme");
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial: Theme = themeParam === "light" || themeParam === "dark"
      ? themeParam
      : saved ?? (prefersLight ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    if (!inIframe && !url.searchParams.get("embed")) {
      if (!saved) localStorage.setItem(THEME_STORAGE_KEY, initial);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) return null;

  const inIframe = typeof window !== "undefined" && window.self !== window.top;
  const isEmbed = typeof window !== "undefined" && new URL(window.location.href).searchParams.get("embed") === "1";
  if (inIframe && isEmbed) return null;

  return (
    <div style={{ position: "fixed", top: "14px", right: "14px", zIndex: 100 }}>
      <button
        type="button"
        onClick={toggleTheme}
        className="gg-theme-toggle"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        style={{ width: "40px", height: "40px", borderRadius: "10px" }}
      >
        {theme === "dark" ? (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M17 12.85A8 8 0 017.15 3 7 7 0 1017 12.85z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}
