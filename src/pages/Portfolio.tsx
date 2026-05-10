import React from 'react';
import { motion } from 'motion/react';
import { Award, Code, Cpu, Database, Eye, Globe, Layers, Layout, Radio, Smartphone, Zap, Shield, Bot, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { LINKS } from '../constants/content';
import MeshGradient from '../components/ui/MeshGradient';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MeshGradient />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4"
        >
          Specialized Capabilities
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Technical <span className="text-blue-500">Mastery</span>.
        </motion.h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          A deep dive into the architectures, systems, and creative media that form the backbone of Jevon Ashley's digital ecosystem.
        </p>
      </div>

      <div className="space-y-32">
        {/* Microsoft Learn Badges Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/20">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Microsoft Learn Credentials</h2>
              <p className="text-gray-500 text-sm">Verified cloud and software engineering milestones.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <BadgeItem icon={<CloudIcon />} title="Azure Fundamentals" status="Verified" />
            <BadgeItem icon={<CopilotIcon />} title="M365 Copilot Business" status="Badge Earned" />
            <BadgeItem icon={<ChatIcon />} title="Copilot Chat Assistant" status="Badge Earned" />
            <BadgeItem icon={<GenAIIcon />} title="Generative AI" status="Badge Earned" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="text-2xl font-bold font-mono text-blue-400">200+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 leading-tight">XP Earned<br/>Last Module</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="text-2xl font-bold font-mono text-emerald-400">46m</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 leading-tight">Focus Time<br/>Copilot Mastery</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
              <div className="text-2xl font-bold font-mono text-purple-400">800</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 leading-tight">Total XP<br/>Daily Intensity</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <a href={LINKS.microsoftLearn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-colors">
               View Full Transcript <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </section>

        {/* AI Systems & Automation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              Core Expertise
            </div>
            <h2 className="text-4xl font-bold leading-tight">AI Orchestration & <br />Intelligent Workflows</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in building 'AI-Native' applications. This means moving beyond simple wrappers to creating systems where the LLM is tightly integrated into the logic, decision-making, and output streams of the product.
            </p>
            
            <ul className="space-y-4">
              <PortfolioFeature icon={<Zap className="w-5 h-5 text-yellow-400" />} text="Generative AI Content Pipelines" />
              <PortfolioFeature icon={<Layers className="w-5 h-5 text-blue-400" />} text="Multi-agent System Architectures" />
              <PortfolioFeature icon={<Database className="w-5 h-5 text-emerald-400" />} text="Vector Database Integration (RAG)" />
              <PortfolioFeature icon={<Radio className="w-5 h-5 text-purple-400" />} text="Real-time Automation Logic" />
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <GlassCard className="aspect-square flex flex-col items-center justify-center text-center">
                <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Neural Logic</div>
             </GlassCard>
             <GlassCard className="aspect-square flex flex-col items-center justify-center text-center mt-8">
                <Globe className="w-10 h-10 text-emerald-500 mb-4" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Global Scale</div>
             </GlassCard>
             <GlassCard className="aspect-square flex flex-col items-center justify-center text-center -mt-8">
                <Layout className="w-10 h-10 text-purple-500 mb-4" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">UX Precision</div>
             </GlassCard>
             <GlassCard className="aspect-square flex flex-col items-center justify-center text-center">
                <Smartphone className="w-10 h-10 text-rose-500 mb-4" />
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Mobile First</div>
             </GlassCard>
          </div>
        </section>

        {/* Creative Media Showcase */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic">Creative Technology Crossover</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visual storytelling amplified by technical precision. From drone cinematography to AI-enhanced post-production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-0 overflow-hidden group">
               <div className="relative aspect-video">
                  <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105 duration-700" alt="Drone Reel" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold">Drone Cinematography Reel</h3>
                    <p className="text-xs text-white/60 font-semibold uppercase tracking-widest">Captured by Kashmere</p>
                  </div>
               </div>
            </GlassCard>

            <GlassCard className="p-0 overflow-hidden group">
               <div className="relative aspect-video">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105 duration-700" alt="UI Design" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layout className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold">UI/UX Innovation Concepts</h3>
                    <p className="text-xs text-white/60 font-semibold uppercase tracking-widest">VidVisionsAI Labs</p>
                  </div>
               </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}

function BadgeItem({ icon, title, status }: { icon: React.ReactNode, title: string, status: string }) {
  return (
    <GlassCard className="flex flex-col items-center text-center p-6 bg-white/[0.02]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-sm font-bold text-white mb-1">{title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{status}</p>
    </GlassCard>
  );
}

function PortfolioFeature({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <li className="flex items-center gap-4 text-gray-300">
      <div className="flex-shrink-0">{icon}</div>
      <span className="font-medium">{text}</span>
    </li>
  );
}

// Simple icons for badges
const CloudIcon = () => <Globe className="w-8 h-8 text-blue-500" />;
const CopilotIcon = () => <Bot className="w-8 h-8 text-emerald-500" />;
const ChatIcon = () => <MessageSquare className="w-8 h-8 text-purple-500" />;
const GenAIIcon = () => <Sparkles className="w-8 h-8 text-yellow-500" />;
