import React, { useState, useEffect, useCallback, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [waveTrigger, setWaveTrigger] = useState(0);
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef(null);

  // Trigger character wave greeting
  const handleTriggerWave = useCallback(() => {
    setWaveTrigger(prev => prev + 1);
  }, []);

  // Smooth custom easing scroll navigation to sections
  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (!el) return;

    isNavigatingRef.current = true;
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);

    const targetPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 650;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setActiveSection(sectionId);
        // Release navigation lock after small grace period
        navTimeoutRef.current = setTimeout(() => {
          isNavigatingRef.current = false;
        }, 150);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  // Track active section on scroll: home -> about -> experience -> work -> skills -> contact
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'work', 'skills', 'contact'];

    const handleScroll = () => {
      // If programmatically navigating via click, do not let scroll listener override active tab
      if (isNavigatingRef.current) return;

      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // When scrolled near the bottom of the page, activate 'contact'
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check which section is in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF8F6] text-[#292426] selection:bg-[#d03d36]/20 selection:text-[#d03d36] overflow-x-hidden">
      {/* Magnetic Glowing Custom Cursor */}
      <CustomCursor />

      {/* Floating Frosted Glass Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onTriggerWave={handleTriggerWave}
      />

      {/* Main Sections in Required Order: 
          1. Hero (Home)
          2. About
          3. Experience
          4. Work
          5. Skills
          6. Contact
      */}
      <main className="w-full">
        {/* 1. Hero Section */}
        <HeroSection 
          onNavigate={handleNavigate}
          waveTrigger={waveTrigger}
        />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Experience Section */}
        <ExperienceSection />

        {/* 4. Work Section */}
        <WorkSection />

        {/* 5. Skills Section */}
        <SkillsSection />

        {/* 6. Contact Section (includes minimal footer) */}
        <ContactSection />
      </main>
    </div>
  );
}
