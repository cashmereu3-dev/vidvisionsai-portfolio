import { motion } from 'motion/react';
import { ArrowRight, Cpu, Globe, Rocket, Shield, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AIEcosystemVisual from '../components/sections/AIEcosystemVisual';
import MusicPlayer from '../components/ui/MusicPlayer';
import GlassCard from '../components/ui/GlassCard';
import { PROJECTS, TECH_STACK } from '../constants/content';

export default function Home() {
  return (
    <div className="space-y-24 pb-32">
      <Hero />

      {/* Main Feature Grid (Bento Style from Theme) */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 flex flex-col justify-center mb-8 md:mb-0">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Founder Ecosystem
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Architecting intelligent platforms that redefine how we interact with technology, data, and digital creativity.
              </p>
          </div>

          <GlassCard className="md:col-span-4 bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group" hover={false}>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div>
              <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4 font-bold">Innovation Focus</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono hover:bg-blue-500/20 transition-colors cursor-pointer uppercase font-bold tracking-tighter">VidVisionsAI</span>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono hover:bg-blue-500/20 transition-colors cursor-pointer uppercase font-bold tracking-tighter">RoadOpsAI</span>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono hover:bg-blue-500/20 transition-colors cursor-pointer uppercase font-bold tracking-tighter">ApexInventory</span>
                <span className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono hover:bg-blue-500/20 transition-colors cursor-pointer uppercase font-bold tracking-tighter">AIDimensions</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
              <span className="text-4xl font-bold tracking-tighter">06+</span>
              <span className="text-[10px] font-mono text-white/40 leading-tight uppercase font-bold">SaaS<br />Platforms</span>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-5 bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-8 relative overflow-hidden group" hover={false}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-6 font-bold">Featured Intelligence</h3>
            <div className="relative z-10">
              <div className="text-5xl font-bold mb-4 leading-none tracking-tighter">RoadOps AI</div>
              <p className="text-base text-white/60 font-light leading-relaxed mb-10">
                Autonomous infrastructure monitoring and intelligent workflow orchestration for modern civil engineering.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 font-mono text-xl border border-white/5 shadow-inner">01</div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">Neural Visual Analysis</div>
                    <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Real-time anomaly detection system</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 font-mono text-xl border border-white/5 shadow-inner">02</div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">Cloud Automation</div>
                    <div className="text-[10px] text-white/40 uppercase font-mono tracking-widest">Distributed edge computing pipelines</div>
                  </div>
                </div>
              </div>
              <Link to="/projects/roadops-ai" className="mt-12 inline-block px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-all hover:scale-105">Explore Platform</Link>
            </div>
          </GlassCard>

          <div className="md:col-span-4 flex flex-col gap-4">
            <GlassCard className="flex-1 bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-8" hover={false}>
              <h3 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-6 font-bold">Academic Path</h3>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-blue-400 uppercase font-bold tracking-tighter mb-1">Western Governors University</span>
                  <span className="text-lg font-bold tracking-tight">B.S. Software Engineering</span>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" 
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter mb-1">S.W. Mississippi College</span>
                  <span className="text-lg font-bold tracking-tight">Process Ops Tech Graduate</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-md border border-orange-500/20 rounded-3xl p-8 flex flex-col justify-between" hover={false}>
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-[10px] font-mono text-orange-400 uppercase tracking-[0.2em] font-bold">Creative Tech</h3>
                <div className="w-10 h-10 rounded-full border border-orange-400/30 flex items-center justify-center text-[10px] text-orange-400 font-bold uppercase">DJI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-100 tracking-tighter italic">Visions4You</div>
                <p className="text-[10px] text-orange-200/50 uppercase font-bold tracking-widest mt-1">Aerial & Digital Storytelling</p>
              </div>
            </GlassCard>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
              <GlassCard className="flex-1 bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center group" hover={false}>
                <div className="w-16 h-16 bg-[#0067b8] rounded-xl mb-4 flex items-center justify-center shadow-2xl shadow-blue-600/40 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/></svg>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">Microsoft Learn</div>
                <div className="text-[10px] text-white/40 font-mono font-bold uppercase">Cloud Solutions Expert</div>
                <div className="mt-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </GlassCard>
              
              <GlassCard className="bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden relative group" hover={false}>
                <div className="flex justify-between items-end h-full">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-white/30 uppercase font-bold tracking-widest">Current Status</div>
                    <div className="text-xl font-bold text-white/90 italic">Scaling Intelligence</div>
                    <div className="text-[10px] text-blue-400/80 uppercase font-bold tracking-tighter">v4.0.1_STABLE</div>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-mono text-white/5 select-none leading-none tracking-tighter group-hover:text-blue-500/10 transition-colors">777</div>
                  </div>
                </div>
              </GlassCard>
          </div>
      </section>

      {/* Interactive 3D Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em] mb-4 font-bold">Spatial Intelligence</h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Neural Network <span className="italic text-gray-500">Infrastructure</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              An interactive representation of the interconnected AI models and platforms powering the VidVisions ecosystem. Explore the nodes to see the relationships between distributed intelligences.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Active Nodes</div>
              <div className="text-2xl font-bold font-mono">14</div>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-[10px] font-mono text-white/40 uppercase mb-1">Grid Latency</div>
              <div className="text-2xl font-bold font-mono">1.2ms</div>
            </div>
          </div>
        </div>
        
        <AIEcosystemVisual />
      </section>

      {/* Sonic Ecosystem Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="mb-12">
          <h3 className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em] mb-4 font-bold">Frequency Modulation</h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Sonic <span className="italic text-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Ecosystem</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Stream curated frequency sets from the VidVisions audio laboratory. Modular sounds for deep work and high-intensity building.
          </p>
        </div>
        
        <MusicPlayer />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <GlassCard className="text-center py-24 bg-gradient-to-br from-blue-900/10 to-black border-blue-500/10 relative overflow-hidden" hover={false}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter italic">Ready to build the future?</h2>
            <p className="text-gray-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Looking for a visionary partner to architect your next AI-powered platform or digital product?
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-14 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-blue-400 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5">
                Initiate Collaboration
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
