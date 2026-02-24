/**
 * useTheme — dark / light mode toggle
 * - Reads initial value from localStorage, falls back to prefers-color-scheme
 * - Applies / removes `body.dark` class
 * - Exports { theme, toggleTheme }
 */
import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

function getSystemPreference() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (_) { /* ignore */ }
  return getSystemPreference();
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply class to body whenever theme changes
  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) { /* ignore */ }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
