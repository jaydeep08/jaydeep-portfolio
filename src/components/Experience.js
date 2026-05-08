import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealBox from './RevealBox';

function BulletItem({ html }) {
  return (
    <li className="experience-bullet">
      <span className="experience-bullet__mark">-</span>
      <span
        dangerouslySetInnerHTML={{
          __html: html
            .replace(/<em>/g, '<span style="color:var(--cream);font-style:normal">')
            .replace(/<\/em>/g, '</span>'),
        }}
      />
    </li>
  );
}

export default function Experience({ experience }) {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" className="section-shell section-alt">
      <RevealBox>
        <div className="section-label">Experience</div>
      </RevealBox>

      <RevealBox delay={0.1}>
        <div className="section-kicker">W O R K</div>
      </RevealBox>

      {experience.map((exp, index) => (
        <RevealBox key={index} delay={0.15}>
          <motion.div
            className="experience-row"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{ paddingLeft: hovered === index ? 20 : 0 }}
          >
            <motion.div
              animate={{ scaleY: hovered === index ? 1 : 0, opacity: hovered === index ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="experience-row__bar"
            />

            <div className="experience-row__num">{exp.num}</div>

            <div>
              <div className="experience-row__company">{exp.company}</div>
              <div className="experience-row__role">{exp.role}</div>
              <div className="experience-row__meta">
                {exp.period} · {exp.location}
              </div>
            </div>

            <ul className="experience-list">
              {exp.bullets.map((bullet, bulletIndex) => (
                <BulletItem key={bulletIndex} html={bullet} />
              ))}
            </ul>
          </motion.div>
        </RevealBox>
      ))}
    </section>
  );
}
