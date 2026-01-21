import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      // The "Disintegrated" state (when out of view)
      initial={{ 
        opacity: 0, 
        y: 50, 
        scale: 0.95, 
        filter: "blur(12px)" 
      }}
      // The "Assembled" state (when in view)
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        filter: "blur(0px)" 
      }}
      // Trigger logic: Replays animation every time it enters/leaves (once: false)
      viewport={{ 
        once: false, 
        amount: 0.3,   // Element must be 30% visible to assemble
        margin: "-50px" 
      }}
      // Smooth, heavy physics for premium feel
      transition={{ 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1], 
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}