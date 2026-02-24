import React from 'react';

// Styles
import './styles/global.css';

// Data
import siteData from './content/siteData';

// Hooks
import useTheme from './hooks/useTheme';

// Components & Sections
import Nav           from './components/Nav';
import Hero          from './sections/Hero';
import Skills        from './sections/Skills';
import Experience    from './sections/Experience';
import Projects      from './sections/Projects';
import Education     from './sections/Education';
import Certifications from './sections/Certifications';
import Contact       from './sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Nav
        resumeFile={siteData.resumeFile}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content" className="container">
        <Hero data={siteData} />

        <hr className="separator" />
        <Skills data={siteData} />

        <hr className="separator" />
        <Experience data={siteData} />

        <hr className="separator" />
        <Projects data={siteData} />

        <hr className="separator" />
        <Education data={siteData} />

        <hr className="separator" />
        <Certifications data={siteData} />

        <hr className="separator" />
        <Contact data={siteData} />
      </main>

      <footer className="site-footer" role="contentinfo">
        <p>
          Designed &amp; built by{' '}
          <a
            href={siteData.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteData.name}
          </a>
          {' '}&middot; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}