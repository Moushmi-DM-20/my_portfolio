import React, { useState, useEffect } from 'react';
import { Home, User, Building2, Briefcase, Code2, Mail, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onTriggerWave }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Building2 },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    if (id === 'home' && onTriggerWave) {
      onTriggerWave();
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center items-center px-2 sm:px-3 pointer-events-none select-none">
      <nav 
        className={`pointer-events-auto flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-300 max-w-full shadow-lg ${
          scrolled 
            ? 'glass-pill-dark text-white shadow-2xl' 
            : 'hero-glass-pill text-white shadow-xl'
        }`}
      >
        {/* Navigation Items in clean flex layout without horizontal scrollbars */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-0.5 sm:gap-1.5 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-white text-[#d03d36] shadow-sm font-bold'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isActive ? 'text-[#d03d36]' : 'text-white/70'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subtle greeting trigger button */}
        <button
          onClick={() => {
            handleNavClick('home');
            if (onTriggerWave) onTriggerWave();
          }}
          className="hidden md:flex items-center gap-1 ml-1 pl-2.5 pr-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-all duration-200 border border-white/20 active:scale-95 whitespace-nowrap"
          title="Wave hello!"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Say Hi</span>
        </button>
      </nav>
    </header>
  );
}
