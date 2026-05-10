import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer');
      
      setIsHovered(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          left: -16,
          top: -16,
        }}
        className="absolute w-8 h-8 border border-blue-500/50 rounded-full"
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.2 : 0.5,
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -2,
          top: -2,
        }}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        animate={{
          scale: isHovered ? 4 : 1,
        }}
      >
        <div className="absolute inset-0 bg-blue-400 rounded-full blur-sm animate-pulse" />
      </motion.div>

      {/* Tracer Glow */}
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          left: -40,
          top: -40,
        }}
        className="absolute w-20 h-20 bg-blue-500/10 rounded-full blur-xl pointer-events-none"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.3 : 0.1,
        }}
      />
    </div>
  );
}
