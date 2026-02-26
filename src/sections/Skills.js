/**
 * Skills — tech stack grouped by category with tag pills.
 * Uses the Panel pattern: panel-header with screen-line-before, tech-tag pills.
 */
import React from 'react';
import './Skills.css';

export default function Skills({ data }) {
  if (!data.skills || data.skills.length === 0) return null;

  const total = data.skills.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="panel skills-panel" aria-labelledby="skills-heading">
      <div className="panel-header">
        <h2 id="skills-heading" className="panel-title">
          Tech Stack
          <sup className="panel-count">{total}</sup>
        </h2>
      </div>

      <div className="skills-panel__groups">
        {data.skills.map((group) => (
          <div key={group.category} className="skills-panel__group">
            <h3 className="skills-panel__category">{group.category}</h3>
            <div className="skills-panel__tags" role="list" aria-label={group.category}>
              {group.items.map((item) => (
                <span key={item} className="tech-tag" role="listitem">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
