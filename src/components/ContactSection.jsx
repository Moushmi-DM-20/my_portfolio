import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "moushmidm@gmail.com";
  const githubUrl = "https://github.com/Moushmi-DM-20";
  const linkedinUrl = "https://linkedin.com/in/moushmi-d-m";
  const leetcodeUrl = "https://leetcode.com/u/MoushmiDM/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 px-5 sm:px-10 lg:px-16 bg-[#922626] text-[#FFF9F5] border-t border-white/10 min-h-[460px] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        
        {/* Simple professional heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Contact Me
        </h2>

        {/* Clean, well-aligned description */}
        <p className="text-base sm:text-lg text-[#FFF9F5]/90 mb-10 max-w-xl mx-auto leading-relaxed text-center">
          Thanks for visiting my portfolio. You can reach me through email or connect with me on LinkedIn, GitHub and LeetCode.
        </p>

        {/* Contact Links: Responsive wrap & touch-friendly */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-16">
          
          {/* Direct Email Action with Copy */}
          <div className="inline-flex items-center gap-2 p-1.5 pl-3.5 pr-2 rounded-full bg-black/20 border border-white/20 text-white max-w-full shadow-sm">
            <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
            <a 
              href={`mailto:${emailAddress}`}
              className="text-xs sm:text-sm font-medium hover:underline text-white truncate max-w-[180px] sm:max-w-none"
            >
              {emailAddress}
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-xs font-semibold text-white flex items-center gap-1 ml-1 flex-shrink-0"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="text-emerald-200">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Link */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-white" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>

          {/* GitHub Link */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>

          {/* LeetCode Link */}
          <a
            href={leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all active:scale-95 shadow-sm"
          >
            <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
            <span>LeetCode</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>

        </div>

        {/* Minimal Footer with clean alignment */}
        <div className="pt-8 border-t border-white/15 text-xs text-[#FFF9F5]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Moushmi. All rights reserved.
          </div>
          <div>
            Software Developer · Syncfusion
          </div>
        </div>

      </div>
    </section>
  );
}

// LeetCode SVG icon
function LeetCodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.975 3.513 5.6 5.6 0 0 0 1.25-.098 5.765 5.765 0 0 0 2.223-.974l3.873-3.712a1.365 1.365 0 0 0-.915-2.345 1.35 1.35 0 0 0-.952.404l-3.864 3.693a3.14 3.14 0 0 1-1.21.528 3.036 3.036 0 0 1-1.341-.059 3.23 3.23 0 0 1-1.748-1.229 3.266 3.266 0 0 1-.482-1.938 3.328 3.328 0 0 1 .494-1.921 3.292 3.292 0 0 1 1.066-1.129l3.882-4.156 4.417-4.735a1.37 1.37 0 0 0-.97-2.355zM16.586 7.643a1.367 1.367 0 0 0-.967.404l-3.322 3.323a1.366 1.366 0 0 0 1.932 1.932l3.323-3.323a1.366 1.366 0 0 0-.966-2.336z"/>
      <path d="M8.775 12.181a1.367 1.367 0 0 0-1.366 1.366 1.367 1.367 0 0 0 1.366 1.366h8.795a1.367 1.367 0 0 0 1.366-1.366 1.367 1.367 0 0 0-1.366-1.366H8.775z"/>
    </svg>
  );
}

