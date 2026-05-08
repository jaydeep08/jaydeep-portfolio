import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RevealBox from './RevealBox';

const connectLines = [
  { text: 'READY TO', color: 'var(--cream)' },
  { text: 'BUILD', color: 'var(--gold)' },
  { text: 'something great?', isSerif: true, color: 'var(--muted)' },
];

export default function Connect({ data }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <section id="connect" ref={ref} className="section-shell section-dark connect-section">
        <div className="connect-ghost">CONNECT</div>

        <div className="connect-inner">
          <RevealBox>
            <div className="section-label">Let's Connect</div>
          </RevealBox>

          <div style={{ overflow: 'hidden' }}>
            {connectLines.map((line, index) => (
              <div key={index} style={{ overflow: 'hidden', lineHeight: 1.35 }}>
                <motion.div
                  initial={{ y: '100%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ delay: index * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`connect-line ${line.isSerif ? 'is-serif' : ''}`}
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="connect-links">
            {[
              { label: 'Email', href: `mailto:${data.email}`, text: data.email },
              { label: 'Phone', href: `tel:${data.phone}`, text: data.phone },
              { label: 'LinkedIn', href: data.linkedin, text: 'linkedin.com/in/jaydeep' },
              { label: 'GitHub', href: data.github, text: 'github.com/jaydeep' },
            ].map((link, index) => (
              <RevealBox key={index} delay={index * 0.08}>
                <div className="connect-card">
                  <div className="connect-card__label">{link.label}</div>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="connect-card__link"
                  >
                    {link.text}
                  </a>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>(c) 2026 Jaydeep Patidar / All rights reserved</p>
        <p>SharePoint Developer / Bangalore, India</p>
      </footer>
    </>
  );
}
