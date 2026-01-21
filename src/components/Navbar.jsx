import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle scrolling to anchors from other pages
  const handleScrollNav = (e, id) => {
    e.preventDefault();
    if (!isHomePage) {
      // If not on home, go to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If on home, just scroll
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled ? "bg-sony-black/70 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-6"
      )}
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
  to="/"
  onClick={() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }}
  className="flex items-center gap-4 group"
>
  <span className="text-white font-semibold tracking-tight text-lg">Sony</span>
  <span className="text-white/40 font-light text-sm hidden sm:block border-l border-white/20 pl-4 group-hover:text-white/60 transition-colors">
    WH-1000XM6
  </span>
</Link>


        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
            {/* Scroll Links */}
            {/* Overview (scroll on home) */}
<a
  href="#overview"
  onClick={(e) => handleScrollNav(e, 'overview')}
  className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
>
  Overview
</a>

{/* Technology (route navigation) */}
<Link
  to="/technology"
  className={`text-sm font-medium transition-colors ${
    location.pathname === '/technology'
      ? 'text-white'
      : 'text-white/70 hover:text-white'
  }`}
>
  Technology
</Link>


            {/* Router Link to Specs Page */}
            <Link 
              to="/specs"
              className={`text-sm font-medium transition-colors ${location.pathname === '/specs' ? 'text-white' : 'text-white/70 hover:text-white'}`}
            >
              Specs
            </Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
             <a href="buy" className="text-xs font-medium text-white/70 hover:text-white transition-colors hidden sm:block">Buy</a>
            <button className="bg-accent-blue hover:bg-accent-blue/90 text-white text-xs px-4 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(0,80,255,0.3)] hover:shadow-[0_0_25px_rgba(0,80,255,0.5)]">
                <Link to="/pre-order">Pre-Order</Link>
            </button>
        </div>
      </div>
    </nav>
  );
}