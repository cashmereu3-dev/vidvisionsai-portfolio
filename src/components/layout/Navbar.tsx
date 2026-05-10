import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { BRAND } from '../../constants/content';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <nav className="fixed left-0 top-0 bottom-0 w-20 border-r border-white/10 bg-black/40 backdrop-blur-xl hidden md:flex flex-col items-center py-8 gap-10 z-50">
        <Link to="/" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-black text-2xl shadow-lg shadow-cyan-500/20 hover:scale-110 transition-transform">
          V
        </Link>
        <div className="flex flex-col gap-10 opacity-60 text-[10px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex flex-col items-center gap-2 transition-all hover:text-white group",
                location.pathname === link.href ? "text-white" : "text-gray-400"
              )}
            >
              {location.pathname === link.href && (
                <motion.div 
                  layoutId="sidebar-dot"
                  className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-1 shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
                />
              )}
              <span className="vertical-text whitespace-nowrap">{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-6 opacity-40">
          <a href="#" className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Github className="w-3 h-3" /></a>
          <a href="#" className="w-6 h-6 border border-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Linkedin className="w-3 h-3" /></a>
        </div>
      </nav>

      {/* Mobile Top Nav */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-black text-sm">V</div>
          <span className="text-lg font-bold tracking-tighter">{BRAND.mainBrand}</span>
        </Link>
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[49] md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-bold uppercase tracking-widest transition-colors",
                  location.pathname === link.href ? "text-blue-500" : "text-white/60"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
