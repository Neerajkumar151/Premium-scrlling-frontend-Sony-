import React from 'react';
import Navbar from './Navbar';
import ScrollReveal from './ScrollReveal';
import { Cpu, Mic, Wifi, Zap, Activity, Radio, Layers } from 'lucide-react';

// --- Sub-Components ---

const TechCard = ({ icon: Icon, title, subtitle, desc, className = "", delay = 0 }) => (
  <ScrollReveal delay={delay} className={`p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between group ${className}`}>
    <div>
      <div className="w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} className="text-accent-blue" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
      <span className="text-accent-blue font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
        {subtitle}
      </span>
    </div>
    <p className="text-white/60 leading-relaxed font-light max-w-sm">
      {desc}
    </p>
  </ScrollReveal>
);

const StatBlock = ({ value, label }) => (
  <div className="flex flex-col border-l border-white/10 pl-6">
    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
      {value}
    </span>
    <span className="text-xs text-white/40 uppercase tracking-widest mt-2">
      {label}
    </span>
  </div>
);

const AnimatedWave = () => (
  <div className="flex items-center justify-center gap-1 h-12">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className="w-1 bg-accent-blue rounded-full animate-pulse" 
        style={{ 
          height: '100%', 
          animationDelay: `${i * 0.1}s`,
          animationDuration: '1s'
        }} 
      />
    ))}
  </div>
);

// --- Main Component ---

export default function Technology() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-accent-blue selection:text-white">
      
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="text-accent-blue font-mono text-sm uppercase tracking-[0.2em] mb-6 block">
              The Architecture of Sound
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
              Inside the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">Silence.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <StatBlock value="V1" label="Integrated Processor" />
            <StatBlock value="30mm" label="Driver Unit" />
            <StatBlock value="8x" label="Mic Array" />
          </ScrollReveal>
        </div>
      </section>

      {/* --- THE CHIP (Full Width Feature) --- */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            {/* Central Chip Visual (Abstract) */}
            <div className="relative z-10 flex flex-col items-center text-center p-8">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-black border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-transparent" />
                  <Cpu size={48} className="text-white relative z-10" />
                  {/* Scanning Line Animation */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue/50 blur-[2px] animate-[scan_2s_ease-in-out_infinite]" style={{ animationName: 'scan' }} />
               </div>
               
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Integrated Processor V1</h2>
               <p className="text-white/60 max-w-lg mx-auto">
                 Unlock the full potential of our HD Noise Cancelling Processor QN1. 
                 This exclusive technology controls 8 microphones to deliver unprecedented noise cancellation quality.
               </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- BENTO GRID: Tech Breakdown --- */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Driver Unit (Tall) */}
          <TechCard 
            icon={Radio} 
            title="30mm Driver" 
            subtitle="Precision Audio"
            desc="The specially designed 30mm driver unit with soft edge enhances noise cancelling, especially in low frequency ranges, helping you enjoy your music precisely without ambient noise."
            className="md:row-span-2 bg-gradient-to-b from-white/5 to-transparent"
          />

          {/* Card 2: Microphones */}
          <TechCard 
            icon={Mic} 
            title="Beamforming Mics" 
            subtitle="Crystal Clear Calls"
            desc="Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm to isolate your voice."
            delay={0.1}
          />

          {/* Card 3: LDAC */}
          <TechCard 
            icon={Wifi} 
            title="LDAC Coding" 
            subtitle="Hi-Res Wireless"
            desc="Transmits approximately three times more data than conventional Bluetooth audio for exceptional High-Resolution Audio quality."
            delay={0.2}
          />

          {/* Card 4: AI Restoration (Wide) */}
          <ScrollReveal delay={0.3} className="md:col-span-2 p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
             <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-6">
                   <Activity className="text-accent-blue" size={24} />
                   <span className="font-bold text-xl">DSEE Extreme™</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Real-time Restoration.</h3>
                <p className="text-white/60">
                   Using Edge-AI, DSEE Extreme™ upscales compressed digital music files in real time. It dynamically recognizes instrumentation, musical genres, and individual elements.
                </p>
             </div>
             
             {/* Visualizer Graphic - FIXED: Removed bg-black/30 box */}
             <div className="flex-1 w-full flex flex-col items-center justify-center h-32">
                <AnimatedWave />
                <span className="text-xs text-white/30 uppercase tracking-widest mt-6 font-mono">
                  Audio Signal Processing
                </span>
             </div>
          </ScrollReveal>

        </div>
      </section>

      {/* --- MATERIAL DESIGN SECTION --- */}
      <section className="py-32 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
             <ScrollReveal className="aspect-square relative rounded-full border border-white/10 flex items-center justify-center">
                {/* Simulated 'Layers' or Material visual */}
                <div className="w-[80%] h-[80%] rounded-full border border-white/10 absolute animate-[spin_10s_linear_infinite]" />
                <div className="w-[60%] h-[60%] rounded-full border border-white/20 absolute animate-[spin_15s_linear_infinite_reverse]" />
                <img 
                  src="/sequence/ezgif-frame-001.jpg" 
                  alt="Ear Cup Material" 
                  className="w-[50%] h-[50%] object-cover rounded-full opacity-80"
                />
             </ScrollReveal>
          </div>

          <div className="w-full md:w-1/2">
             <ScrollReveal>
               <Layers className="text-accent-blue mb-6" size={48} />
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Soft Fit Leather.</h2>
               <p className="text-xl text-white/60 font-light mb-8">
                 This soft fit leather fits snugly around the head with less pressure on the ears while keeping out external sounds. The noiseless design with stepless slider makes wearing them a joy.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center gap-4 text-white/80">
                   <Zap size={18} className="text-accent-blue" />
                   <span>Pressure-relieving ear pads</span>
                 </li>
                 <li className="flex items-center gap-4 text-white/80">
                   <Zap size={18} className="text-accent-blue" />
                   <span>Seamless swivel mechanism</span>
                 </li>
                 <li className="flex items-center gap-4 text-white/80">
                   <Zap size={18} className="text-accent-blue" />
                   <span>Lightweight chassis</span>
                 </li>
               </ul>
             </ScrollReveal>
          </div>

        </div>
      </section>

      
    </div>
  );
}