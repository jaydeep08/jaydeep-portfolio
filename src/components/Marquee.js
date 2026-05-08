import React from 'react';

export default function Marquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '16px 0',
      overflow: 'hidden',
      background: 'var(--bg2)',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marqueeScroll 28s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              paddingRight: 56,
              fontFamily: 'var(--font-display)',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              whiteSpace: 'nowrap',
            }}
          >
            <span>{item}</span>
            <div style={{
              width: 5,
              height: 5,
              background: 'var(--gold)',
              borderRadius: '50%',
              flexShrink: 0,
            }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
