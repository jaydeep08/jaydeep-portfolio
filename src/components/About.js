import React from 'react';
import RevealBox from './RevealBox';

export default function About({ data }) {
  return (
    <section id="about" className="section-shell section-dark">
      <RevealBox>
        <div className="section-label">About</div>
      </RevealBox>

      <div className="about-grid">
        <RevealBox>
          <div>
            <h2 className="about-title">
              BUILDING
              <br />
              <span>smart</span> ENTERPRISE
              <br />
              ON MICROSOFT
              <br />
              CLOUD.
            </h2>

            <div className="about-stats">
              {data.stats.map((stat, index) => (
                <div key={index}>
                  <div className="about-stat__value">
                    {stat.num.replace(/[+%]/, '')}
                    <span>{stat.num.match(/[+%]/)?.[0]}</span>
                  </div>
                  <div className="about-stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealBox>

        <RevealBox delay={0.15}>
          <div className="about-copy-wrap">
            <p className="about-copy">
              SharePoint Developer with <strong>2+ years of experience</strong> building scalable
              intranet solutions, workflow automation, document generation systems, and
              AI-powered productivity tools at <strong>Genpact, Bangalore</strong>.
            </p>
            <p className="about-copy">
              Specialized in <strong>SPFx (React)</strong>, Microsoft Graph, SharePoint Online,
              Power Automate, and Copilot Studio. Known for transforming manual processes into
              intelligent solutions that reduce effort by <strong>60-90%</strong>.
            </p>
            <p className="about-copy">
              Strong in front-end engineering, reusable UI frameworks, requirements analysis, and
              mentoring juniors within Agile delivery models.
            </p>

            <div className="about-badge">
              <span>✦</span>
              <span>Microsoft AZ-900 Certified</span>
            </div>
          </div>
        </RevealBox>
      </div>
    </section>
  );
}
