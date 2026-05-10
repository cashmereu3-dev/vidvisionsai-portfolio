import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { BRAND, LINKS } from '../../constants/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter">{BRAND.mainBrand}</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Advancing the intersection of AI, software engineering, and creative technology. Building the future of intelligent systems.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href={`mailto:${LINKS.email}`} icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Exploration</h4>
            <ul className="space-y-4">
              <FooterLink to="/about">About Journey</FooterLink>
              <FooterLink to="/portfolio">AI Portfolio</FooterLink>
              <FooterLink to="/projects">Core Projects</FooterLink>
              <FooterLink to="/resume">Technical Resume</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Platforms</h4>
            <ul className="space-y-4">
              <FooterExternalLink href="https://www.aidimensions.online/">AI Dimensions</FooterExternalLink>
              <FooterExternalLink href="https://roadopsai.pro">RoadOps AI</FooterExternalLink>
              <FooterExternalLink href="https://apexinventoryai.online">Apex Inventory</FooterExternalLink>
              <FooterExternalLink href={LINKS.microsoftLearn}>Microsoft Learn</FooterExternalLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-8">
             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-white/10"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
        {children}
      </Link>
    </li>
  );
}

function FooterExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
      >
        {children}
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </li>
  );
}
