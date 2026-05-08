import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ringRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef();

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringRef.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = () => {
      setRing(prev => ({
        x: prev.x + (ringRef.current.x - prev.x) * 0.1,
        y: prev.y + (ringRef.current.y - prev.y) * 0.1,
      }));
      rafRef.current = requestAnimationFrame(lerp);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovered(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovered(false);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    rafRef.current = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: hovered ? 16 : 8,
          height: hovered ? 16 : 8,
          background: hovered ? 'var(--accent)' : 'var(--gold)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s, background 0.2s',
          scale: clicked ? 0.6 : 1,
        }}
      />
      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: ring.x,
          top: ring.y,
          width: hovered ? 56 : 38,
          height: hovered ? 56 : 38,
          border: `1px solid ${hovered ? 'var(--accent)' : 'var(--gold)'}`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0.55,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        }}
      />
    </>
  );
}
