"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { preferredTheme, saveTheme, type Theme } from "@/lib/theme";

const THEME_CHANGE_EVENT = "themechange";

function subscribe(onThemeChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
}

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function serverTheme(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, serverTheme);
  const isDark = theme === "dark";

  // React's development-only remount strips attributes from <html>, so restore the theme
  // the inline script applied. In production this re-applies the same value.
  useLayoutEffect(() => {
    applyTheme(preferredTheme());
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm text-soft transition-colors hover:text-ink md:h-9"
    >
      <span
        aria-hidden="true"
        className={`size-2.5 rounded-full border border-current ${isDark ? "bg-current" : ""}`}
      />
      Dark mode
    </button>
  );
}
