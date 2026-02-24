/**
 * Projects — collapsible accordion cards mirroring nskr.dev projects section.
 * Shows first 4 tags + "+N more", toggle to show all projects.
 */
import React, { useState } from 'react';
import './Projects.css';

const VISIBLE_TAGS = 4;

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

function ProjectCard({ project, defaultExpanded = false }) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const tags = project.tags || [];
  const visibleTags = expanded ? tags : tags.slice(0, VISIBLE_TAGS);
  const extraCount = tags.length - VISIBLE_TAGS;

  return (
    <article className="proj__card">
      {/* Header row */}
      <div className="proj__card-top">
        <div className="proj__title-row">
          <h3 className="proj__title">{project.title}</h3>
          {project.period && (
            <span className="proj__period">{project.period}</span>
          )}
        </div>

        {/* Expand toggle */}
        <button
          className="proj__toggle"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          aria-label={expanded ? `Collapse ${project.title}` : `Expand ${project.title}`}
        >
          <ChevronIcon open={expanded} />
        </button>
      </div>

      {/* Expandable body */}
      <div className={`proj__body${expanded ? ' proj__body--open' : ''}`}>
        <p className="proj__description">{project.description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="proj__tags" role="list" aria-label="Technologies used">
            {visibleTags.map(tag => (
              <span key={tag} className="tech-tag" role="listitem">{tag}</span>
            ))}
            {!expanded && extraCount > 0 && (
              <span className="proj__tags-more">+{extraCount} more</span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="proj__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost proj__link"
              aria-label={`GitHub: ${project.title}`}
            >
              <GithubIcon /> Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost proj__link"
              aria-label={`Live demo: ${project.title}`}
            >
              <ExternalIcon /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ data }) {
  if (!data.projects || data.projects.length === 0) return null;

  return (
    <section id="projects" className="panel proj-panel" aria-labelledby="proj-heading">
      <div className="panel-header">
        <h2 id="proj-heading" className="panel-title">
          Projects
          <sup className="panel-count">{data.projects.length}</sup>
        </h2>
      </div>

      <div className="proj__list">
        {data.projects.map((project, i) => (
          <ProjectCard key={i} project={project} defaultExpanded={i === 0} />
        ))}
      </div>
    </section>
  );
}
