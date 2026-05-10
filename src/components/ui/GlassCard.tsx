import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({ children, className, delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden",
        hover && "hover:bg-white/[0.08] hover:border-white/20 hover:shadow-blue-500/10 hover:-translate-y-1",
        className
      )}
    >
      {/* Subtle glow effect on hover */}
      {hover && (
        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
