import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Globe, MapPin, Printer, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { BRAND, EDUCATION, LINKS, TECH_STACK } from '../constants/content';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 no-print">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Professional Credentials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Technical <span className="text-blue-500">Summary</span>.
          </motion.h1>
        </div>

        <div className="flex gap-4">
          <button 
           onClick={handlePrint}
           className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 font-bold text-sm"
          >
            <Printer className="w-4 h-4" />
            Print to PDF
          </button>
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors flex items-center gap-2 font-bold text-sm text-white shadow-lg shadow-blue-600/20"
          >
            <Download className="w-4 h-4" />
            Download ATS Version
          </a>
        </div>
      </div>

      <GlassCard hover={false} className="bg-white/5 border-white/10 p-0 overflow-hidden shadow-2xl">
        {/* Header Ribbon */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        
        <div className="p-8 md:p-16">
          {/* Header Info */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-white/5 pb-10 mb-10">
            <div>
              <h2 className="text-4xl font-bold mb-2">{BRAND.name}</h2>
              <p className="text-xl text-blue-400 font-medium mb-6 uppercase tracking-wider">{BRAND.headline}</p>
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2 italic"><Mail className="w-4 h-4 text-blue-500" /> {LINKS.email}</span>
                <span className="flex items-center gap-2 italic"><Globe className="w-4 h-4 text-blue-500" /> {BRAND.domain}</span>
                <span className="flex items-center gap-2 italic"><MapPin className="w-4 h-4 text-blue-500" /> US Remote / On-site</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Professional Summary */}
              <section>
                <SectionHeader icon={<Briefcase />} title="Professional Vision" />
                <p className="text-gray-300 leading-relaxed italic">
                  Forward-thinking Software Engineer and AI Strategist with a proven background in technical process operations. 
                  Focused on architecting scalable digital ecosystems and autonomous platforms. Leveraging current academic 
                  depth in Software Engineering to implement high-integrity, cloud-native solutions that bridge the gap 
                  between complex data and human-centric design.
                </p>
              </section>

              {/* Founder Experience */}
              <section>
                <SectionHeader icon={<Globe />} title="Founder Experience" />
                <div className="space-y-10">
                  <ExperienceItem 
                    title="Founder & Lead Architect"
                    company="VidVisionsAI"
                    period="2023 - Present"
                    description="Spearheading a multi-platform venture ecosystem focused on AI-driven automation, creative media, and technical infrastructure management."
                    bulletPoints={[
                      "Architected RoadOps AI: An intelligent logistics system for real-time operational data processing.",
                      "Engineered Apex Inventory AI: A high-performance SaaS platform for predictive stock management.",
                      "Designed multi-agent AI workflows to automate content generation and creative data streams.",
                      "Built and scaled 6+ digital platforms with a unified cloud architecture strategy."
                    ]}
                  />
                  <ExperienceItem 
                    title="Creative Director"
                    company="Visions4You — Captured by Kashmere"
                    period="2021 - Present"
                    description="Developing high-end visual storytelling platforms using drone technology and modern digital media workflows."
                    bulletPoints={[
                      "Integrated AI-assisted post-production workflows into photographic and cinematic pipelines.",
                      "Executed drone-based technical inspections and creative media captures using DJI systems.",
                      "Scaled digital brand presence for multiple creative enterprises."
                    ]}
                  />
                </div>
              </section>

              {/* Projects Summary */}
              <section>
                 <SectionHeader icon={<Globe />} title="Ecosystem Highlights" />
                 <div className="grid grid-cols-2 gap-4">
                    <ProjectBrief title="AI Dimensions" description="Generative intelligence lab." />
                    <ProjectBrief title="Recovery DNA" description="Health-tech data analysis." />
                 </div>
              </section>
            </div>

            {/* Sidebar Columns */}
            <div className="space-y-12">
              {/* Education */}
              <section>
                <SectionHeader icon={<GraduationCap />} title="Education" />
                <div className="space-y-6">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-white font-bold text-sm tracking-tight">{edu.degree}</div>
                      <div className="text-blue-400 text-xs font-semibold">{edu.institution}</div>
                      <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-tighter">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills Matrix */}
              <section>
                <SectionHeader icon={<Code />} title="Technical Matrix" />
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Toolset */}
              <section>
                 <SectionHeader icon={<Code />} title="Aviation & Gear" />
                 <ul className="text-xs text-gray-500 space-y-2 font-bold italic">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> DJI Pocket 2 Specialist</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> sUAS Drone Ops</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> DJI Intelligent Flight Systems</li>
                 </ul>
              </section>
            </div>
          </div>
        </div>
      </GlassCard>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .bg-black { background: white !important; }
          .text-white { color: black !important; }
          .text-gray-400, .text-gray-500 { color: #333 !important; }
          .border-white\\/10 { border-color: #ddd !important; }
          .bg-white\\/5 { background: transparent !important; }
          nav, footer { display: none !important; }
          main { padding-top: 0 !important; }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-2">
      <div className="text-blue-500 w-5 h-5">{icon}</div>
      <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">{title}</h3>
    </div>
  );
}

function ExperienceItem({ title, company, period, description, bulletPoints }: { title: string; company: string; period: string; description: string; bulletPoints: string[] }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase italic">{title}</h4>
          <p className="text-blue-400 font-semibold">{company}</p>
        </div>
        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">{period}</span>
      </div>
      <p className="text-gray-400 text-sm italic">{description}</p>
      <ul className="grid grid-cols-1 gap-2">
        {bulletPoints.map((point, idx) => (
          <li key={idx} className="text-xs text-gray-400 flex gap-3">
            <span className="text-blue-500 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectBrief({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 rounded-xl border border-white/5 bg-white/5">
      <div className="text-xs font-bold text-white mb-1 uppercase tracking-tight">{title}</div>
      <p className="text-[10px] text-gray-500 italic">{description}</p>
    </div>
  );
}
