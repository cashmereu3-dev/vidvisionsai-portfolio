import React from 'react';
import { motion } from 'motion/react';

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020203]">
      {/* Primary Gradient Mesh */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-25, 25, -25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [25, -25, 25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[150px]"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"
      />
      
      {/* Animated Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
}
