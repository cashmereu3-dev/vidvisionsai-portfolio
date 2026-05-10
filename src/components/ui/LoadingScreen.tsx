import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/40"
      >
        <Cpu className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-xl font-bold tracking-tighter mb-2 italic">VidVisionsAI Systems</h2>
        <div className="flex items-center gap-2 justify-center">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">Synchronizing Neural Ecosystem...</p>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-full bg-blue-500"
        />
      </div>
    </motion.div>
  );
}
