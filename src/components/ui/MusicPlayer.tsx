import React from 'react';
import { motion } from 'motion/react';
import { Music2, Radio } from 'lucide-react';
import GlassCard from './GlassCard';

export default function MusicPlayer() {
  return (
    <GlassCard className="overflow-hidden bg-black/60 border-white/10" hover={false}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit">
            <Radio className="w-3 h-3 text-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono text-white/60 tracking-wider font-bold">LIVE_TRANSMISSION</span>
          </div>
          <h3 className="text-3xl font-bold tracking-tighter text-white">SilverFoxx2u</h3>
          <p className="text-sm text-white/40 font-light leading-relaxed">
            Architecting the soundscapes of the future. Experience the modular sonic frequencies of the VidVisions ecosystem.
          </p>
          <div className="flex gap-2">
             <span className="w-1 h-3 bg-blue-500/40 rounded-full animate-[bounce_1s_infinite]" />
             <span className="w-1 h-5 bg-blue-500/60 rounded-full animate-[bounce_1.2s_infinite]" />
             <span className="w-1 h-2 bg-blue-500/30 rounded-full animate-[bounce_0.8s_infinite]" />
             <span className="w-1 h-4 bg-blue-500/50 rounded-full animate-[bounce_1.1s_infinite]" />
          </div>
        </div>
        
        <div className="w-full md:flex-1 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
            <iframe 
              allow="autoplay" 
              width="100%" 
              height="200" 
              src="https://www.iheart.com/artist/silverfoxx2u-49675133?app=listen&embed=true" 
              frameBorder="0" 
              title="SilverFoxx2u on iHeartRadio"
              className="grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
