import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RevealBox from './RevealBox';

export default function Skills({ skills }) {
  const [hoveredGroup, setHoveredGroup] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="skills" className="section-shell section-alt">
      <RevealBox>
        <div className="section-label">Technical Skills</div>
      </RevealBox>

      <RevealBox delay={0.05}>
        <div className="section-kicker">
          WHAT I
          <br />
          <span style={{ color: 'var(--gold)' }}>KNOW</span>
        </div>
      </RevealBox>

      <div className="skills-grid">
        {skills.map((group, groupIndex) => (
          <RevealBox key={groupIndex} delay={groupIndex * 0.08}>
            <motion.div
              onMouseEnter={() => setHoveredGroup(groupIndex)}
              onMouseLeave={() => setHoveredGroup(null)}
              animate={{ background: hoveredGroup === groupIndex ? 'var(--bg)' : 'var(--bg2)' }}
              transition={{ duration: 0.3 }}
              className="skills-card"
            >
              <div className="skills-card__title">{group.category}</div>

              <ul className="skills-card__list">
                {group.items.map((item, itemIndex) => {
                  const key = `${groupIndex}-${itemIndex}`;
                  return (
                    <motion.li
                      key={itemIndex}
                      onMouseEnter={() => setHoveredItem(key)}
                      onMouseLeave={() => setHoveredItem(null)}
                      animate={{
                        x: hoveredItem === key ? 8 : 0,
                        color: hoveredItem === key ? 'var(--cream)' : 'var(--muted)',
                      }}
                      transition={{ duration: 0.2 }}
                      className="skills-card__item"
                    >
                      {item}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </RevealBox>
        ))}
      </div>
    </section>
  );
}
