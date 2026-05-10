import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Filter, ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { PROJECTS } from '../constants/content';
import { cn } from '../lib/utils';

const categories = ["All", "AI Systems", "SaaS", "Creative", "Ecosystem"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0])));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Venture Ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            The Innovation <span className="text-blue-500">Pipeline</span>.
          </motion.h1>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-white text-black shadow-lg" 
                  : "text-gray-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <GlassCard className="h-full p-0 overflow-hidden border-white/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          
          <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-600/40"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 opacity-80">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
            {project.description}
          </p>
          
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-sm font-bold flex items-center gap-2 group/btn"
            >
              Launch Site
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
            <div className="flex gap-4 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
               <Github className="w-5 h-5 cursor-help" />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
