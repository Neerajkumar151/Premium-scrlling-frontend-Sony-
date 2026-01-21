import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section = ({ progress, range, title, subtitle, children, align = 'center' }) => {
  // Use the passed progress value instead of a new hook
  const opacity = useTransform(
    progress,
    [range[0] - 0.05, range[0], range[1] - 0.05, range[1]],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [range[0], range[1]],
    [50, -50]
  );
  
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right'
  }[align];

  return (
    <motion.div 
      style={{ opacity, y }}
      className={`fixed inset-0 flex flex-col justify-center px-8 md:px-24 lg:px-32 pointer-events-none z-10 ${alignClass}`}
    >
      <div className="max-w-2xl space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            {title}
        </h2>
        {subtitle && <p className="text-xl md:text-2xl font-light text-white/80">{subtitle}</p>}
        {children && <div className="text-lg text-white/60 pt-4">{children}</div>}
      </div>
    </motion.div>
  );
};

export default function ScrollOverlay({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      {/* 0-15% Hero */}
      <Section progress={scrollYProgress} range={[0.00, 0.15]} title="Sony WH-1000XM6" subtitle="Silence, perfected." align="center">
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-light tracking-wide mt-4">
          Flagship wireless noise cancelling, re‑engineered for a world that never stops.
        </p>
      </Section>

      {/* 15-40% Engineering Reveal - Left Aligned */}
      <Section progress={scrollYProgress} range={[0.18, 0.38]} title="Precision-engineered for silence." align="left">
        <div className="space-y-4 max-w-lg">
            <p className="text-xl font-medium text-white/90">
                Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            </p>
            <p className="text-base text-white/60">
                Every component is tuned for balance, power, and comfort—hour after hour.
            </p>
        </div>
      </Section>

      {/* 40-65% Noise Cancelling - Right Aligned */}
      <Section progress={scrollYProgress} range={[0.42, 0.62]} title="Adaptive noise cancelling, redefined." align="right">
         <div className="space-y-6 max-w-lg ml-auto">
            <div className="border-l-2 border-accent-blue/50 pl-6">
                <h4 className="text-white font-semibold text-lg">Multi-microphone array</h4>
                <p className="text-white/60 text-sm mt-1">Listens in every direction to capture more ambient sound.</p>
            </div>
            <div className="border-l-2 border-accent-cyan/50 pl-6">
                 <h4 className="text-white font-semibold text-lg">Real-time analysis</h4>
                 <p className="text-white/60 text-sm mt-1">Adjusts to your environment 1000s of times per second.</p>
            </div>
            <p className="text-white/80 italic">Reference-quality isolation. Planes, trains, and voices fade away.</p>
        </div>
      </Section>

      {/* 65-85% Sound - Left Aligned (or Center) */}
      <Section progress={scrollYProgress} range={[0.68, 0.83]} title="Immersive, lifelike sound." subtitle="High-performance drivers." align="left">
        <div className="space-y-4 max-w-lg">
            <p className="text-lg text-white/70 leading-relaxed">
                Precision 30mm drivers with soft TPU edges dampen vibrations, unlocking detail and depth in every track.
            </p>
             <p className="text-lg text-white/70 leading-relaxed">
                <span className="text-accent-blue">AI-enhanced upscaling</span> restores high-frequency sounds lost in compression.
            </p>
        </div>
      </Section>

      {/* 85-100% Reassembly & CTA */}
      <Section progress={scrollYProgress} range={[0.88, 1.0]} title="Hear everything." subtitle="Feel nothing else." align="center">
        <div className="flex flex-col items-center gap-6 pt-8 pointer-events-auto">
             <div className="text-center mb-4">
                <p className="text-xl text-white font-medium">WH-1000XM6</p>
                <p className="text-sm text-white/50 uppercase tracking-widest mt-1">Designed for focus. Crafted for comfort.</p>
             </div>
            <div className="flex gap-4">
                <button className="bg-accent-blue hover:bg-accent-blue/90 text-white text-lg px-10 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(0,80,255,0.4)] hover:shadow-[0_0_30px_rgba(0,80,255,0.6)] hover:scale-105 active:scale-95">
                    Experience WH-1000XM6
                </button>
                 <button className="text-white/70 hover:text-white text-base px-6 py-4 font-medium transition-colors hover:underline underline-offset-4">
                    See full specs
                </button>
            </div>
        </div>
      </Section>
    </>
  );
}
