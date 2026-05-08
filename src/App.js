import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Connect from './components/Connect';
import { data } from './data';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatedBackground />

      {/* Noise grain overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <Cursor />

      {/* Loader */}
      <Loader onDone={() => setLoaded(true)} />

      {/* Main site - fades in after loader */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
        position: 'relative',
        zIndex: 1,
      }}>
        <Navbar initials={data.initials} />
        <Hero data={data} />
        <Marquee items={data.marqueeItems} />
        <About data={data} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Skills skills={data.skills} />
        <Education education={data.education} certifications={data.certifications} />
        <Connect data={data} />
      </div>
    </>
  );
}
