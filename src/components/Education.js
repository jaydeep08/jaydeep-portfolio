import React from 'react';
import RevealBox from './RevealBox';

function EduCard({ edu }) {
  return (
    <div
      className="edu-card"
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
    >
      <div className="edu-card__degree">{edu.degree}</div>
      <div className="edu-card__full">{edu.full}</div>
      <div className="edu-card__school">{edu.institution}</div>
      <div className="edu-card__year">{edu.year}</div>
    </div>
  );
}

export default function Education({ education, certifications }) {
  return (
    <section id="education" className="section-shell section-dark">
      <RevealBox>
        <div className="section-label">Education</div>
      </RevealBox>

      <RevealBox delay={0.05}>
        <div className="section-kicker">
          LEARNING
          <br />
          <span className="section-kicker__serif">& Growth</span>
        </div>
      </RevealBox>

      <RevealBox delay={0.1}>
        <div className="education-grid">
          {education.map((edu, index) => (
            <EduCard key={index} edu={edu} />
          ))}

          <div className="education-cert-row">
            <div className="education-cert-row__label">Certification</div>
            {certifications.map((cert, index) => (
              <div key={index} className="education-cert">
                <span>✦</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealBox>
    </section>
  );
}
