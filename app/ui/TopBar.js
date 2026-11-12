'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'honors', label: 'Honors' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function TopBar() {
  const [active, setActive] = useState('about');
  // While a nav click is scrolling the page, keep the clicked tab active.
  // Short last sections (Skills, Contact) can't reach the top, so scroll-based
  // detection alone would highlight the wrong tab.
  const clickLock = useRef(false);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    let unlockTimer;

    const release = () => {
      clickLock.current = false;
      clearTimeout(unlockTimer);
    };

    const onScroll = () => {
      if (clickLock.current) {
        // Release once the programmatic scroll has settled.
        clearTimeout(unlockTimer);
        unlockTimer = setTimeout(release, 150);
        return;
      }
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;

      // Active = last section whose top has passed 35% of the viewport.
      const line = window.innerHeight * 0.35;
      let current = els[0]?.id;
      for (const el of els) {
        if (el.getBoundingClientRect().top - line <= 0) current = el.id;
      }
      if (max - doc.scrollTop < 4) current = els[els.length - 1]?.id;
      setActive(current);
    };

    const onUserScrollIntent = () => clickLock.current && release();

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', onUserScrollIntent, { passive: true });
    window.addEventListener('touchstart', onUserScrollIntent, { passive: true });
    window.addEventListener('keydown', onUserScrollIntent);
    return () => {
      clearTimeout(unlockTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', onUserScrollIntent);
      window.removeEventListener('touchstart', onUserScrollIntent);
      window.removeEventListener('keydown', onUserScrollIntent);
    };
  }, []);

  const onNavClick = (id) => {
    clickLock.current = true;
    setActive(id);
  };

  // Keep the active chip visible on narrow screens where the nav scrolls sideways.
  useEffect(() => {
    // (Adjust scrollLeft directly; scrollIntoView would interrupt smooth page scrolling.)
    const link = document.querySelector(`.nav-link[data-id="${active}"]`);
    const list = link?.closest('ul');
    if (!link || !list || list.scrollWidth <= list.clientWidth) return;
    const target = link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [active]);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <nav aria-label="Sections" className="topbar-nav">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  data-id={s.id}
                  className={`nav-link ${active === s.id ? 'is-active' : ''}`}
                  aria-current={active === s.id ? 'true' : undefined}
                  onClick={() => onNavClick(s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
