/**
 * Experience — panel pattern with company cards, role, bullets, and tech tags.
 * Panel header (screen-line-before) + company cards with role, period, bullets, tech tags.
 */
import React from 'react';
import './Experience.css';

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

const BRAND_ICONS = {
  amazon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Amazon orange smile arc */}
      <path d="M5.5 16.5Q12 20 18.5 16.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Arrowhead */}
      <path d="M17 14.5l2.5 2.5-2 1.2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
};

function CompanyIcon({ icon }) {
  if (icon && BRAND_ICONS[icon]) return BRAND_ICONS[icon];
  return <BriefcaseIcon />;
}

function ExperienceCard({ exp }) {
  return (
    <article className="exp__card">
      <div className="exp__card-header">
        <div className="exp__company-row">
          <div className="exp__company-icon" aria-hidden="true">
            <CompanyIcon icon={exp.icon} />
          </div>
          <div>
            <h3 className="exp__company">{exp.company}</h3>
            <p className="exp__role">{exp.role}</p>
          </div>
        </div>
        <div className="exp__meta">
          {exp.type && <span className="tech-tag exp__type-tag">{exp.type}</span>}
          <span className="exp__period">{exp.period}</span>
          {exp.location && <span className="exp__location">{exp.location}</span>}
        </div>
      </div>

      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="exp__bullets">
          {exp.bullets.map((b, i) => (
            <li key={i} className="exp__bullet">{b}</li>
          ))}
        </ul>
      )}

      {exp.tags && exp.tags.length > 0 && (
        <div className="exp__tags" role="list" aria-label="Technologies used">
          {exp.tags.map(tag => (
            <span key={tag} className="tech-tag" role="listitem">{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Experience({ data }) {
  if (!data.experience || data.experience.length === 0) return null;

  return (
    <section id="experience" className="panel exp-panel" aria-labelledby="exp-heading">
      <div className="panel-header">
        <h2 id="exp-heading" className="panel-title">
          Experience
          <sup className="panel-count">{data.experience.length}</sup>
        </h2>
      </div>

      <div className="exp__list">
        {data.experience.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}
