/**
 * Nav — sticky, backdrop-blur navigation.
 * Mirrors nskr.dev nav behavior:
 *   - font-mono links with sliding underline (0→100%) on hover/active
 *   - active section tracked by IntersectionObserver scroll-spy
 *   - live clock display (HH:MM:SS)
 *   - light/dark theme toggle
 *   - mobile: collapses links behind hamburger
 */
import React, { useState, useEffect, useCallback } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';
import './Nav.css';

const NAV_LINKS = [
  { label: 'About',      id: 'hero'       },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Education',  id: 'education'  },
  { label: 'Contact',    id: 'contact'    },
];

/* ── Sun / Moon icons ───────────────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Live clock hook ──────────────────────────────────────────────────────── */
function useClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    function tick() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ── Component ────────────────────────────────────────────────────────────── */
export default function Nav({ resumeFile = '/resume.pdf', theme, onToggleTheme }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const sectionIds = NAV_LINKS.map(l => l.id);
  const activeId   = useScrollSpy(sectionIds, 80);
  const clock      = useClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close menu when clicking a link
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update hash for deep-link friendliness
    window.history.pushState(null, '', `#${id}`);
  }, []);

  return (
    <>
      <header
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        role="banner"
      >
        <div className="nav__inner">
          {/* Left: site name */}
          <a
            href="#hero"
            className="nav__brand"
            onClick={e => handleNavClick(e, 'hero')}
            aria-label="Back to top"
          >
            BT
          </a>

          {/* Center: links (desktop) */}
          <nav className="nav__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav__link${activeId === id ? ' nav__link--active' : ''}`}
                onClick={e => handleNavClick(e, id)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right: clock + theme toggle + resume (desktop) */}
          <div className="nav__actions">
            {clock && (
              <span className="nav__clock" aria-hidden="true">
                <span role="img" aria-label="United States">🇺🇸</span>{' '}{clock}
              </span>
            )}
            <button
              className="nav__theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__resume btn btn-secondary"
            >
              Résumé
            </a>
            {/* Mobile hamburger */}
            <button
              className="nav__hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav__mobile-link${activeId === id ? ' nav__mobile-link--active' : ''}`}
            onClick={e => handleNavClick(e, id)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {label}
          </a>
        ))}
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav__mobile-resume"
          tabIndex={menuOpen ? 0 : -1}
        >
          View Résumé
        </a>
      </div>

      {menuOpen && (
        <div
          className="nav__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
