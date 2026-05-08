import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: delay + 0.2,
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  },
});

export default function Hero({ data }) {
  const [activeRole, setActiveRole] = useState(0);
  const [bgY, setBgY] = useState(0);
  const [imageError, setImageError] = useState(false);

  const heroRef = useRef(null);

  useEffect(() => {
    if (!data?.roles?.length) return;

    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % data.roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [data?.roles?.length]);

  useEffect(() => {
    const onScroll = () => setBgY(window.scrollY * 0.2);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      {/* Clean single-outline ghost text */}
      <div
        className="hero-ghost"
        style={{
          transform: `translate(-50%, calc(-50% + ${bgY}px))`,
        }}
      >
        JAYDEEP
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll__label">Scroll</span>

        <motion.div
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hero-scroll__line"
        />
      </div>

      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="hero-top">
            {/* Left content */}
            <div className="hero-left">
              <motion.div {...fadeUp(0)} className="hero-eyebrow">
                SharePoint Developer / Bangalore, India
              </motion.div>

              <motion.h1 {...fadeUp(0.15)} className="hero-title">
                JAYDEEP
                <br />
                <span>PATIDAR</span>
              </motion.h1>

              <motion.div {...fadeUp(0.3)} className="hero-roles">
                {data?.roles?.map((role, index) => (
                  <div
                    key={role}
                    className={`hero-role ${
                      index === activeRole ? 'active' : ''
                    }`}
                  >
                    {role}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              className="hero-image-wrap"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Better portfolio background */}
              <div className="hero-image-glow" />
              <div className="hero-image-glow-soft" />
              {/* <div className="hero-image-accent-line" /> */}
              <div className="hero-image-bottom-fade" />

              {!imageError ? (
                <img
                  src="/assets/Profile.png"
                  alt="Jaydeep Patidar"
                  className="hero-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-image-fallback">Image not found</div>
              )}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.5)} className="hero-meta">
            <p className="hero-summary">
              Transforming <span>manual enterprise processes</span> into
              intelligent, scalable solutions. Specialized in SharePoint
              Online, intranet engineering, and
              <span> AI-powered productivity tools</span>.
            </p>

            <div className="hero-contact">
              <a href={`mailto:${data?.email}`} className="hero-contact__link">
                {data?.email}
              </a>

              <a href={`tel:${data?.phone}`} className="hero-contact__link">
                {data?.phone}
              </a>

              <span>{data?.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}