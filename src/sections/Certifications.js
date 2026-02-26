/**
 * Certifications — 3-column responsive card grid.
 */
import React from 'react';
import './Certifications.css';

const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const AWSIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {/* Cloud */}
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#FF9900" fillOpacity="0.15" stroke="#FF9900" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Orange smile arrow - AWS signature */}
    <path d="M8 16.5Q12 18.5 16 16.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M14.5 15.2l2 1.5-1.2 1" stroke="#FF9900" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const CERT_ICONS = { aws: <AWSIcon />, google: <GoogleIcon /> };

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function CertCard({ cert }) {
  return (
    <div className="cert__card">
      <div className="cert__card-icon" aria-hidden="true">
        {CERT_ICONS[cert.icon] || <FileTextIcon />}
      </div>
      <div className="cert__card-body">
        <h3 className="cert__name">{cert.name}</h3>
        <p className="cert__issuer">{cert.issuer}</p>
      </div>
      {cert.file && (
        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="cert__link btn-ghost"
          aria-label={`View certificate: ${cert.name}`}
        >
          View <ExternalIcon />
        </a>
      )}
      {cert.url && !cert.file && (
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cert__link btn-ghost"
          aria-label={`View certificate: ${cert.name}`}
        >
          View <ExternalIcon />
        </a>
      )}
    </div>
  );
}

export default function Certifications({ data }) {
  if (!data.certifications || data.certifications.length === 0) return null;

  return (
    <section id="certifications" className="panel cert-panel" aria-labelledby="cert-heading">
      <div className="panel-header">
        <h2 id="cert-heading" className="panel-title">
          Certifications
          <sup className="panel-count">{data.certifications.length}</sup>
        </h2>
      </div>

      <div className="cert__grid">
        {data.certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} />
        ))}
      </div>
    </section>
  );
}
