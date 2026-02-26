/**
 * Education — alternating two-column timeline on desktop, single-column on mobile.
 * Center vertical gradient line on desktop; single column on mobile.
 */
import React from 'react';
import './Education.css';

function EducationItem({ edu, index }) {
  /* Even index → left column, odd → right column */
  const side = index % 2 === 0 ? 'left' : 'right';
  return (
    <div className={`edu__item edu__item--${side}`}>
      <div className="edu__card">
        <p className="edu__period">{edu.period}</p>
        <h3 className="edu__degree">{edu.degree}</h3>
        <p className="edu__school">{edu.school}</p>
        {edu.location && (
          <p className="edu__location">{edu.location}</p>
        )}
        {edu.note && (
          <p className="edu__note">{edu.note}</p>
        )}
      </div>
      {/* Timeline dot on the center line */}
      <span className="edu__dot" aria-hidden="true" />
    </div>
  );
}

export default function Education({ data }) {
  if (!data.education || data.education.length === 0) return null;

  return (
    <section id="education" className="panel edu-panel" aria-labelledby="edu-heading">
      <div className="panel-header">
        <h2 id="edu-heading" className="panel-title">
          Education
          <sup className="panel-count">{data.education.length}</sup>
        </h2>
      </div>

      <div className="edu__timeline">
        {/* Center line (desktop only) */}
        <div className="edu__center-line" aria-hidden="true" />
        {data.education.map((edu, i) => (
          <EducationItem key={i} edu={edu} index={i} />
        ))}
      </div>
    </section>
  );
}
