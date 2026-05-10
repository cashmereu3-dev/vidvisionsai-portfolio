import { motion } from 'motion/react';
import { ChevronRight, Play, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../constants/content';
import MeshGradient from '../ui/MeshGradient';

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] flex flex-col justify-center px-4 md:px-12 lg:px-20 overflow-hidden">
      <MeshGradient />
      <div className="max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-wider text-white/60">SYSTEM ACTIVE // PORTFOLIO_v4.0.1</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{BRAND.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-blue-400 font-light tracking-wide mb-12 flex flex-wrap items-center gap-x-4"
        >
          AI Builder <span className="text-white/10 hidden md:inline">•</span> Software Engineering <span className="text-white/10 hidden md:inline">•</span> Creative Technologist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <Link
            to="/projects"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:bg-blue-400 hover:scale-105 active:scale-95 flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            Launch Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="px-10 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all active:scale-95 text-xs uppercase tracking-widest"
          >
            Connect Now
          </Link>
        </motion.div>
      </div>

      {/* Floating System Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="text-right">
          <div className="text-5xl font-mono text-white/5 select-none tracking-tighter">01010101</div>
          <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mt-1">Foundational Engineering Mode</div>
        </div>
      </motion.div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{label}</div>
    </div>
  );
}
