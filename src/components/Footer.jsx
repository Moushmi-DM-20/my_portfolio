import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, onTriggerWave }) {
  const handleBackToTop = () => {
    onNavigate('home');
    if (onTriggerWave) {
      setTimeout(() => onTriggerWave(), 350);
    }
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#292426]/10 text-[#292426] py-10 px-6 sm:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-script text-3xl text-[#d03d36] font-bold">
            Moushmi
          </span>
          <span className="text-[#292426]/30">·</span>
          <span className="text-xs font-medium text-[#292426]/70">
            Software Developer · Syncfusion
          </span>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-[#292426]/60">
            &copy; {new Date().getFullYear()} Moushmi D M
          </p>

          <button
            onClick={handleBackToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF8F6] hover:bg-neutral-100 text-xs font-semibold text-[#292426] border border-[#292426]/10 transition-colors active:scale-95"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d03d36]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
