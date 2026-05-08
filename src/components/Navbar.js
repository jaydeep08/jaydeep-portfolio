import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#connect' },
];

export default function Navbar({ initials }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.nav
      className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8 }}
    >
      <a href="#hero" className="site-nav__brand">
        {initials.split('').map((char, index) => (
          <motion.span
            key={index}
            className="brand-char"
            animate={
              index === 2 // Only animate the 'D' (third character)
                ? {
                    y: [0, -18, -18, 0],
                    rotateY: [0, 180, 360, 0],
                    rotateZ: [0, 5, -5, 0],
                    scale: [1, 1.3, 1.1, 1],
                    x: [0, 4, -4, 0],
                  }
                : {} // Keep 'J' and '.' static
            }
            transition={
              index === 2
                ? {
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 3.2,
                  }
                : {}
            }
            style={{ display: 'inline-block', perspective: '1000px' }}
          >
            {char}
          </motion.span>
        ))}
      </a>

      <button
        type="button"
        className="site-nav__toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        Menu
      </button>

      <ul className={`site-nav__links ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="site-nav__link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
