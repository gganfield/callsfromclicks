"use client";

import { useEffect } from "react";

export default function EmbedMode() {
  useEffect(() => {
    const inIframe = typeof window !== "undefined" && window.self !== window.top;
    const embedParam = typeof window !== "undefined" && new URL(window.location.href).searchParams.get("embed") === "1";
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
