import React from 'react';
import { motion } from 'motion/react';
import { Cpu, BookOpen, Rocket, Award, History, Users, Code, Zap, Globe } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { BRAND, EDUCATION, LINKS } from '../constants/content';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4"
        >
          Architect Profile
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          Engineering the <span className="text-blue-500">Autonomous Era</span>.
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Biography Section */}
        <div className="lg:col-span-2 space-y-12">
          <GlassCard hover={false} className="bg-white/5 border-white/5">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic">
              <History className="w-6 h-6 text-blue-500" />
              The Journey
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                My path in technology has been defined by a relentless curiosity for how systems operate and evolve. Starting with a foundation in <span className="text-white font-semibold">Process Operations Technology</span> at Southwest Mississippi Community College, I developed a disciplined approach to technical efficiency and system integrity.
              </p>
              <p>
                Today, as a <span className="text-white font-semibold">Software Engineering Student</span> at Western Governors University, I am bridging the gap between physical operations and digital intelligence. My focus lies at the intersection of AI, robust software architecture, and creative media systems.
              </p>
              <p>
                As the founder of <span className="text-white font-semibold">{BRAND.mainBrand}</span>, I curate a diverse ecosystem of platforms designed to solve real-world problems through automation, predictive analysis, and immersive visual storytelling.
              </p>
            </div>
          </GlassCard>

          {/* Core Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureItem 
              icon={<Zap className="w-5 h-5 text-yellow-400" />}
              title="Builder Mindset"
              description="I don't just study systems; I architect them. From initial logic to final deployment, I am focused on the 'how' and 'why' of execution."
            />
            <FeatureItem 
              icon={<Cpu className="w-5 h-5 text-blue-400" />}
              title="AI Integration"
              description="AI is not an add-on; it is the core. I integrate generative intelligence into workflows to amplify human capability."
            />
            <FeatureItem 
              icon={<Globe className="w-5 h-5 text-emerald-400" />}
              title="Cloud Mastery"
              description="Building for the future means building on the cloud. I leverage Azure and modern cloud stacks for resilient, global platforms."
            />
            <FeatureItem 
              icon={<Code className="w-5 h-5 text-purple-400" />}
              title="Clean Architecture"
              description="Scalability requires precision. I prioritize clean code, type safety, and robust testing to ensure long-term stability."
            />
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <GlassCard className="bg-blue-600/10 border-blue-500/20">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-blue-500/30 pl-4 py-1">
                  <div className="text-white font-bold mb-1">{edu.degree}</div>
                  <div className="text-blue-400 text-sm mb-2">{edu.institution}</div>
                  <p className="text-gray-400 text-xs italic">{edu.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="bg-white/5 border-white/5">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Learning Path
            </h3>
            <div className="space-y-4">
              <LearningGoal label="SaaS Engineering" progress={85} />
              <LearningGoal label="Cloud Infrastructure" progress={70} />
              <LearningGoal label="AI/ML Integration" progress={80} />
              <LearningGoal label="Creative Technlogy" progress={90} />
            </div>
            <a 
              href={LINKS.microsoftLearn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3 text-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500/20 transition-colors text-sm"
            >
              Verify on Microsoft Learn
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <GlassCard className="h-full p-4">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </GlassCard>
  );
}

function LearningGoal({ label, progress }: { label: string; progress: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-emerald-500"
        />
      </div>
    </div>
  );
}
