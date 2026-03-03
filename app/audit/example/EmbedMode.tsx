"use client";

import { useEffect } from "react";

const THEME_STORAGE_KEY = "gg-theme";

export default function EmbedMode() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const inIframe = window.self !== window.top;
    const embedParam = url.searchParams.get("embed") === "1";
    const themeParam = url.searchParams.get("theme");

    if (embedParam && themeParam === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else if (embedParam && themeParam === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    if (!inIframe && !embedParam) return;

    document.body.classList.add("audit-example-embed-mode");

    const style = document.createElement("style");
    style.textContent = `
      .audit-example-embed-mode a,
      .audit-example-embed-mode button {
        pointer-events: none;
        cursor: default;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove("audit-example-embed-mode");
      style.remove();
    };
  }, []);

  return null;
}
