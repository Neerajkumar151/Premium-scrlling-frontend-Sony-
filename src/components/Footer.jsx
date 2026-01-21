import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, Globe } from 'lucide-react';

// --- Data: Footer Links ---
const footerLinks = [
  {
    title: "Shop",
    links: ["Wireless Headphones", "In-Ear Monitors", "High-Resolution Audio", "Gaming Series", "Accessories", "Gift Cards"]
  },
  {
    title: "Support",
    links: ["Product Support", "Downloads & Manuals", "Warranty Information", "Order Status", "Community", "Contact Us"]
  },
  {
    title: "Experience",
    links: ["Sonic Science", "Audio Reality", "Artist Collaborations", "Music Lounge", "Events", "Store Locator"]
  },
  {
    title: "Company",
    links: ["About Sony", "Careers", "Sustainability", "Corporate Social Responsibility", "Newsroom", "Investor Relations"]
  }
];

// --- Sub-Components ---

const FooterColumn = ({ title, links, delay }) => (
  <ScrollReveal delay={delay} className="flex flex-col gap-4">
    <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-2 font-mono">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a 
            href="#" 
            className="text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center group"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </ScrollReveal>
);

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-accent-blue transition-all duration-300 group">
    <Icon size={18} className="text-white/60 group-hover:text-white transition-colors" />
  </a>
);

// --- Main Component ---

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Top Section: Branding & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
          
          {/* Brand Statement */}
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Hear the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Impossible.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-white/50 font-light">
                Join the inner circle. Get early access to new drops and exclusive artist content.
              </p>
            </ScrollReveal>
          </div>

          {/* Newsletter Input */}
          <ScrollReveal delay={0.2} className="w-full lg:w-auto min-w-[300px]">
            <form className="group relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors pr-12"
              />
              <button 
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white transition-colors"
              >
                <ArrowRight size={24} />
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-24 border-t border-white/10 pt-16">
          {footerLinks.map((col, idx) => (
            <FooterColumn 
              key={idx} 
              title={col.title} 
              links={col.links} 
              delay={0.1 * idx} 
            />
          ))}
        </div>

        {/* Bottom Section: Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
          
          {/* Copyright & Region */}
          <ScrollReveal className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/30 font-medium">
            <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <Globe size={14} />
              <span>India</span>
            </div>
            <div className="hidden md:block w-[1px] h-3 bg-white/20" />
            <span>© 2025 Sony Electronics Inc.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            </div>
          </ScrollReveal>

          {/* Social Icons */}
          <ScrollReveal delay={0.1} className="flex gap-4">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Youtube} />
          </ScrollReveal>

        </div>
      </div>
    </footer>
  );
}