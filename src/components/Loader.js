import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = 'JAYDEEP'.split('');

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 700);
    }, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            zIndex: 99997,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {/* Letters */}
          <div style={{ display: 'flex', gap: 4, overflow: 'hidden' }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  letterSpacing: '0.25em',
                  color: 'var(--cream)',
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Bar */}
          <div
            style={{
              width: 180,
              height: 1,
              background: 'var(--border-light)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                background: 'var(--gold)',
              }}
            />
          </div>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            SharePoint Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
