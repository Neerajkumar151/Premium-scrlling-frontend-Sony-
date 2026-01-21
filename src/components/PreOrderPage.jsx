import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ScrollReveal from './ScrollReveal';
import { Clock, Shield, Zap, Gift, ChevronRight, ArrowRight } from 'lucide-react';

// --- Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set launch date to 14 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold font-mono tracking-tighter">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-8 md:gap-16 justify-center py-12 border-y border-white/10 backdrop-blur-sm bg-white/5 rounded-3xl">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <TimeUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

const BenefitCard = ({ icon: Icon, title, desc }) => (
  <ScrollReveal className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group">
    <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-accent-blue" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/50 leading-relaxed font-light">{desc}</p>
  </ScrollReveal>
);

// --- Main Page ---

export default function PreOrderPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-accent-blue selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        
        {/* Background Atmosphere */}
        <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-white/5 via-transparent to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          
          <ScrollReveal>
            <span className="inline-block py-1 px-3 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
              Limited First Edition
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              The Future <br /> Arrives Soon.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Secure your WH-1000XM5 First Edition. Includes exclusive colorway, 
              custom engraving, and priority shipping.
            </p>
          </ScrollReveal>

          {/* Countdown Container */}
          <ScrollReveal delay={0.3} className="max-w-4xl mx-auto mb-24">
            <CountdownTimer />
          </ScrollReveal>

        </div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="relative py-20">
         <div className="absolute inset-0 bg-white/5 -skew-y-3 transform origin-top-left z-0" />
         
         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <ScrollReveal className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="/sequence/ezgif-frame-001.jpg" 
                 alt="Product Close up" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               
               <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 max-w-lg">
                  <h3 className="text-4xl font-bold mb-4">Midnight Blue Collection.</h3>
                  <p className="text-lg text-white/70">Exclusive to pre-order customers. A deep, iridescent finish that absorbs light.</p>
               </div>
            </ScrollReveal>
         </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Pre-Order?</h2>
          <p className="text-white/50">Join the elite few who experience it first.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={Zap} 
            title="Priority Access" 
            desc="Skip the line. Your order ships 48 hours before the official global release." 
          />
          <BenefitCard 
            icon={Gift} 
            title="Exclusive Merch" 
            desc="Receive a limited edition hard-shell carrying case and braided cables." 
          />
          <BenefitCard 
            icon={Shield} 
            title="Extended Care" 
            desc="Complimentary 1-year extension on your warranty, exclusively for pre-orders." 
          />
        </div>
      </section>

      {/* --- RESERVATION FORM --- */}
      <section className="py-32 bg-white/5 border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
              Reserve Your Spot.
            </h2>
            <p className="text-xl text-white/60 mb-12 font-light">
              No payment required today. We will notify you when your reserved unit is ready for checkout.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative max-w-lg mx-auto">
            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-8 rounded-3xl animate-in fade-in zoom-in duration-500">
                <h3 className="text-2xl font-bold mb-2">You're on the list.</h3>
                <p className="opacity-80">Check your inbox for your reservation ID.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    required
                    className="w-full bg-black border border-white/20 rounded-full py-5 px-8 text-lg focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>
                <button 
                  type="submit" 
                  className="group w-full bg-white text-black rounded-full py-5 text-lg font-bold hover:bg-accent-blue transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Reserve Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-white/30 mt-4">
                  By reserving, you agree to receive updates about this product launch. 
                  <a href="#" className="underline ml-1">Privacy Policy</a>
                </p>
              </form>
            )}
          </ScrollReveal>

        </div>
      </section>

      
    </div>
  );
}