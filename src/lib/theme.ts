export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

// Runs in <head> before the first paint so a saved or system dark theme never flashes light.
// Inline scripts cannot import modules, so this mirrors preferredTheme() below.
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t})()`;

export function preferredTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Storage can be blocked (for example in private browsing); fall back to the system theme.
  }

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Without storage the choice still applies for this visit.
  }
}
