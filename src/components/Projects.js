import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealBox from './RevealBox';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <RevealBox delay={index * 0.1}>
      <div
        className="project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? 'var(--bg2)' : 'transparent' }}
      >
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="project-card__fill"
        />

        <div className="project-card__left">
          <motion.div
            animate={{ color: hovered ? 'var(--gold)' : 'var(--border-light)' }}
            transition={{ duration: 0.4 }}
            className="project-card__num"
          >
            {project.num}
          </motion.div>

          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__italic">{project.titleItalic}</div>
          <div className="project-card__subtitle">{project.subtitle}</div>

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                animate={{
                  borderColor: hovered ? 'var(--gold)' : 'var(--border)',
                  color: hovered ? 'var(--gold)' : 'var(--muted)',
                }}
                transition={{ duration: 0.35 }}
                className="project-card__tag"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="project-card__right">
          <p className="project-card__description">{project.description}</p>

          <div className="project-card__impact">
            <div className="project-card__impact-label">Impact</div>
            <p>{project.impact}</p>
          </div>
        </div>
      </div>
    </RevealBox>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-shell section-dark">
      <RevealBox>
        <div className="section-label">Projects</div>
      </RevealBox>

      <RevealBox delay={0.1}>
        <p className="projects-intro">
          Each project is a transformation - turning <span>slow manual workflows</span> into
          intelligent, automated experiences on the Microsoft Cloud platform.
        </p>
      </RevealBox>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}

      <div style={{ borderBottom: '1px solid var(--border)' }} />
    </section>
  );
}
