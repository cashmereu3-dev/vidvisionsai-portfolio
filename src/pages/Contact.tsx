import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, MessageSquare, Globe } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { BRAND, LINKS } from '../constants/content';
import MeshGradient from '../components/ui/MeshGradient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

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
          Connection Interface
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Initiate <span className="text-blue-500">Transmission</span>.
        </motion.h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Open for strategic collaborations, AI research partnerships, and software engineering opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info info */}
        <div className="space-y-8">
           <GlassCard className="h-full bg-gradient-to-br from-blue-900/10 to-transparent border-blue-500/10">
              <h2 className="text-2xl font-bold mb-8 italic">Let's Build the Future</h2>
              
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<Mail className="w-6 h-6 text-blue-400" />}
                  label="Direct Protocol"
                  value={LINKS.email}
                  href={`mailto:${LINKS.email}`}
                />
                <ContactInfoItem 
                  icon={<Globe className="w-6 h-6 text-emerald-400" />}
                  label="Official Domain"
                  value={BRAND.domain.replace('https://', '')}
                  href={BRAND.domain}
                />
                <ContactInfoItem 
                  icon={<MapPin className="w-6 h-6 text-rose-400" />}
                  label="Location"
                  value="US Remote / Mississippi, USA"
                />
              </div>

              <div className="mt-16 pt-8 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Encrypted Channels</h3>
                <div className="flex gap-4">
                  <SocialButton icon={<Github />} label="GitHub" />
                  <SocialButton icon={<Linkedin />} label="LinkedIn" />
                  <SocialButton icon={<Twitter />} label="Twitter" />
                </div>
              </div>
           </GlassCard>
        </div>

        {/* Form Section */}
        <GlassCard hover={false} className="bg-white/[0.02] border-white/5">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transmission Successful</h3>
              <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                Your message has been received by the VidVisionsAI ecosystem. Expect a response soon.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-400 font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <input 
                  required
                  type="text" 
                  placeholder="Platform Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Message Content</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Describe your vision or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Syncing...' : 'Initiate Sync'}
                <MessageSquare className="w-5 h-5" />
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  </div>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-500/20 transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{label}</div>
        <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight italic">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white text-gray-400 transition-all text-xs font-bold uppercase tracking-widest">
      {icon}
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}
