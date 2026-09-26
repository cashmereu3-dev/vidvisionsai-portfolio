import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Globe, MapPin, Printer, ExternalLink, Briefcase, GraduationCap, Code, Phone } from 'lucide-react';
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
            href={LINKS.resumePdf}
            download="Jevon_Ashley_Resume.pdf"
            className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors flex items-center gap-2 font-bold text-sm text-white shadow-lg shadow-blue-600/20"
          >
            <Download className="w-4 h-4" />
            Download PDF Resume
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
              <p className="text-xl text-blue-400 font-medium mb-6 uppercase tracking-wider">Content Creator • Video Producer • Creative Technologist</p>
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2 italic"><Mail className="w-4 h-4 text-blue-500" /> {LINKS.email}</span>
                <span className="flex items-center gap-2 italic"><Phone className="w-4 h-4 text-blue-500" /> {LINKS.phone}</span>
                <span className="flex items-center gap-2 italic"><Globe className="w-4 h-4 text-blue-500" /> {BRAND.domain}</span>
                <span className="flex items-center gap-2 italic"><MapPin className="w-4 h-4 text-blue-500" /> McComb, MS</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Professional Summary */}
              <section>
                <SectionHeader icon={<Briefcase />} title="Professional Summary" />
                <p className="text-gray-300 leading-relaxed italic">
                  Content creator, video producer, and creative technologist who handles the whole video process: hook writing,
                  scripting, on-camera presenting, multi-camera production, editing, sound design, and retention analytics.
                  Founder of VidVisions AI and Visions4U, producing commercial campaigns, technical explainers, aerial drone
                  work, and product walkthroughs, backed by full-stack web and SaaS experience.
                </p>
              </section>

              {/* Founder Experience */}
              <section>
                <SectionHeader icon={<Globe />} title="Professional Experience" />
                <div className="space-y-10">
                  <ExperienceItem 
                    title="Lead Video Producer & Creative Technologist"
                    company="VidVisions AI / Visions4U LLC — Captured by Cashmere"
                    period="Jan 2022 - Present"
                    description="Commercial campaigns, product explainers, and short-form video for regional and digital businesses."
                    bulletPoints={[
                      "Direct and deliver commercial campaigns, product explainers, and short-form videos for YouTube, TikTok, and Instagram.",
                      "Script, capture, and edit screen recordings and demos of software, AI agents, and web apps, including RoadOps AI and RepoFlow AI.",
                      "Shoot aerial drone footage and ground b-roll for commercial, real estate, and hospitality clients.",
                      "Built Growth HQ, a media studio dashboard that uses the Meta Graph API for scheduling, publishing, and engagement tracking."
                    ]}
                  />
                  <ExperienceItem 
                    title="Content Creator, Music Producer & Digital Artist"
                    company="SilverFoxx2u"
                    period="2021 - Present"
                    description="An independent music and creator brand built from scratch."
                    bulletPoints={[
                      "Write, record, mix, and master original tracks, with visualizers and vertical promos for each release.",
                      "Combine Suno AI with a DAW to build custom audio beds and sonic brand identities.",
                      "Appear on camera and voice multimedia assets."
                    ]}
                  />
                  <ExperienceItem 
                    title="Production Team Lead & Safety Coordinator"
                    company="Industrial Operations — International Paper, Fabricated Pipe"
                    period="2016 - 2022"
                    description="Led high-output crews under strict quality-control, calibration, and safety standards."
                    bulletPoints={[
                      "Set standard operating procedures and structured handoffs that carry over to on-deadline creative work."
                    ]}
                  />
                </div>
              </section>

              {/* Projects Summary */}
              <section>
                 <SectionHeader icon={<Globe />} title="Featured Media" />
                 <div className="grid grid-cols-2 gap-4">
                    <a href={LINKS.reel} className="block"><ProjectBrief title="Video Reel" description="Five client and community films with full playback." /></a>
                    <ProjectBrief title="RepoFlow AI & RoadOps AI" description="Product video demos and walkthroughs." />
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
