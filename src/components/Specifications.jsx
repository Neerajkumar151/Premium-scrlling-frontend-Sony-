import React from 'react';
import ScrollReveal from './ScrollReveal';

// --- Data (Unchanged) ---
const specsData = [
  {
    category: "General",
    items: [
      { label: "Headphone Type", value: "Closed, dynamic" },
      { label: "Driver Unit", value: "30mm (Precision-engineered dome type)" },
      { label: "Magnet", value: "High-power Neodymium" },
      { label: "Impedance", value: "48 ohm (ON) / 16 ohm (OFF)" }, // Shortened for design balance
      { label: "Freq. Response", value: "4 Hz - 40,000 Hz (JEITA)" },
      { label: "Active Response", value: "4 Hz - 40,000 Hz" },
      { label: "Bluetooth Response", value: "20Hz-20,000Hz (44.1kHz) / 20Hz-40,000Hz (LDAC 990kbps)" },
      { label: "Sensitivity", value: "102 dB/mW (ON) / 100 dB/mW (OFF)" },
      { label: "Volume Control", value: "Touch Sensor" },
      { label: "Cord Type", value: "Single-sided (detachable)" },
      { label: "Cord Length", value: "approx. 1.2m" },
      { label: "Plug", value: "Gold-plated L-shaped stereo mini plug" },
      { label: "Wearing Style", value: "Over-Ear" },
    ]
  },
  {
    category: "Battery",
    items: [
      { label: "Charge Time", value: "Approx. 3.5 hrs" },
      { label: "Charge Method", value: "USB" },
      { label: "Audio Playback", value: "Max. 30 hrs (NC ON) / Max. 40 hrs (NC OFF)" },
      { label: "Comm. Time", value: "Max. 24 hrs (NC ON) / Max. 32 hrs (NC OFF)" },
    ]
  },
  {
    category: "Connectivity", // Renamed for catchy feel
    items: [
      { label: "Bluetooth® Version", value: "5.3" },
      { label: "Effective Range", value: "10m" },
      { label: "Frequency Range", value: "2.4GHz band" },
      { label: "Profile", value: "A2DP, AVRCP, HFP, HSP" },
      { label: "Audio Formats", value: "SBC, AAC, LDAC" },
      { label: "Content Protection", value: "SCMS-T" },
    ]
  },
  {
    category: "Noise Cancellation",
    items: [
      { label: "Optimizer", value: "Auto NC Optimizer" },
      { label: "Ambient Sound", value: "Yes" },
      { label: "Quick Attention", value: "Yes" },
      { label: "Atmospheric Pressure", value: "Optimizing" },
    ]
  },
  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 250g" },
    ]
  }
];

// --- Premium Sub-Components ---

const SpecItem = ({ label, value }) => (
  <ScrollReveal className="flex flex-col border-b border-white/10 py-6 pr-4">
    {/* Apple-style Label: Small, Uppercase, Low Contrast */}
    <dt className="text-xs font-bold text-white/40 uppercase tracking-[0.15em] mb-2 font-mono">
      {label}
    </dt>
    {/* Value: Large, High Contrast, Sans-Serif */}
    <dd className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
      {value}
    </dd>
  </ScrollReveal>
);

const SpecCategory = ({ category, items }) => (
  <div className="relative border-t border-white/20 first:border-none py-20">
    <div className="grid lg:grid-cols-12 gap-12">
      
      {/* Sticky Header with Glass Effect */}
      <div className="lg:col-span-4 xl:col-span-3">
        <div className="sticky top-32 z-10 -ml-4 p-4 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/5 overflow-hidden">
          {/* Subtle Shine Effect on Header */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {category}
            </h3>
            <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-accent-blue to-transparent" />
          </ScrollReveal>
        </div>
      </div>

      {/* Grid Layout for Specs Items */}
      <div className="lg:col-span-8 xl:col-span-9">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {items.map((item, idx) => (
            <SpecItem key={idx} label={item.label} value={item.value} />
          ))}
        </dl>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export default function Specifications() {
  return (
    <section className="relative min-h-screen bg-black text-white font-sans selection:bg-accent-blue selection:text-white pb-32">
        
      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/sequence/ezgif-frame-001.jpg" 
          alt="Sony Headphones Detail" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* --- Content Container --- */}
      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto pt-32 md:pt-48">
        
        {/* Massive Hero Header */}
        <header className="mb-32 md:mb-48 border-b border-white/10 pb-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4">
              <span className="text-accent-blue font-mono text-sm tracking-[0.2em] uppercase">
                Technical Data
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Specifications.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex justify-end mt-8">
            <p className="text-xl md:text-2xl text-white/60 max-w-xl text-right font-light leading-relaxed">
              Precision engineering meets acoustic purity. <br className="hidden md:block"/>
              Dive into the details of industry-leading silence.
            </p>
          </ScrollReveal>
        </header>

        {/* Specs Content */}
        <div className="space-y-12">
          {specsData.map((section, idx) => (
            <SpecCategory 
              key={idx} 
              category={section.category} 
              items={section.items} 
            />
          ))}
        </div>


      </div>
    </section>
  );
}