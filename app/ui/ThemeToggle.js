'use client';

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <button type="button" className="icon-btn theme-toggle" onClick={toggle} aria-label="Toggle colour theme" title="Toggle theme">
      <Sun size={16} className="when-dark" aria-hidden="true" />
      <Moon size={16} className="when-light" aria-hidden="true" />
    </button>
  );
}
