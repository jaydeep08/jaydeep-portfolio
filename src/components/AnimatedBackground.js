import React from 'react';
import { motion } from 'framer-motion';

const orbs = [
  {
    width: 420,
    height: 420,
    top: '-8%',
    left: '-10%',
    background: 'radial-gradient(circle, rgba(201,169,110,0.16) 0%, rgba(201,169,110,0.04) 42%, transparent 72%)',
    duration: 18,
    x: [0, 40, -20, 0],
    y: [0, 26, 60, 0],
  },
  {
    width: 520,
    height: 520,
    top: '24%',
    right: '-14%',
    background: 'radial-gradient(circle, rgba(212,82,42,0.12) 0%, rgba(212,82,42,0.03) 40%, transparent 74%)',
    duration: 22,
    x: [0, -30, 10, 0],
    y: [0, -36, 28, 0],
  },
  {
    width: 320,
    height: 320,
    bottom: '8%',
    left: '28%',
    background: 'radial-gradient(circle, rgba(232,226,212,0.09) 0%, rgba(232,226,212,0.02) 45%, transparent 76%)',
    duration: 16,
    x: [0, 18, -26, 0],
    y: [0, -24, 18, 0],
  },
];

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.08, 0.96, 1] }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(18px)',
            opacity: 0.95,
            mixBlendMode: 'screen',
            ...orb,
          }}
        />
      ))}

      <motion.div
        animate={{ opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(115deg, transparent 0%, rgba(201,169,110,0.03) 22%, transparent 45%, rgba(212,82,42,0.025) 72%, transparent 100%)',
        }}
      />
    </div>
  );
}
