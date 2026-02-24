import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

export default function About({ data }) {
  const [headerRef, headerVisible] = useScrollReveal();
  const [bodyRef,   bodyVisible]   = useScrollReveal();

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="section__inner">

        {/* Section header */}
        <div
          ref={headerRef}
          className={`section__header reveal${headerVisible ? ' visible' : ''}`}
        >
          <h2 id="about-heading" className="section__heading">About</h2>
          <span className="section__line" aria-hidden="true" />
        </div>

        <div
          ref={bodyRef}
          className={`about__body reveal${bodyVisible ? ' visible' : ''}`}
        >
          {/* Bio */}
          <div className="about__bio">
            <p className="about__text">{data.about}</p>

            {/* Education cards */}
            <div className="about__edu-list">
              {data.education.map((edu, i) => (
                <div key={i} className="about__edu-card">
                  <div className="about__edu-header">
                    <span className="about__edu-degree">{edu.degree}</span>
                    <span className="about__edu-period">{edu.period}</span>
                  </div>
                  <span className="about__edu-school">{edu.school}</span>
                  {edu.note && (
                    <p className="about__edu-note">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="about__skills">
            <h3 className="about__skills-heading">Tech I work with</h3>
            {data.skills.map((group, i) => (
              <div key={i} className="about__skill-group">
                <span className="about__skill-category">{group.category}</span>
                <div className="about__tags">
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications */}
            {data.certifications && data.certifications.length > 0 && (
              <div className="about__certs">
                <h3 className="about__skills-heading about__certs-heading">Certifications</h3>
                <ul className="about__cert-list">
                  {data.certifications.map((cert, i) => (
                    <li key={i}>
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about__cert-link"
                      >
                        <span className="about__cert-issuer">{cert.issuer}</span>
                        <span className="about__cert-name">{cert.name}</span>
                        <span className="about__cert-arrow" aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
