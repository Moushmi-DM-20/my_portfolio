import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const technologies = [
    'C#',
    'ASP.NET Core',
    'ASP.NET MVC',
    'Java',
    'JavaScript',
    'TypeScript',
    'Blazor',
    'DOCX APIs',
    'Git'
  ];

  return (
    <section id="experience" className="py-20 px-5 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#292426] border-t border-[#292426]/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple professional heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292426] mb-2">
            Professional Experience
          </h2>
          <p className="text-base text-[#71696A]">
            Software product development
          </p>
        </div>

        {/* ONE UNIFIED EXPERIENCE ENTRY - Clean Executive Card */}
        <div className="bg-[#FAF8F6] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#292426]/8 shadow-xs hover:border-[#d03d36]/25 transition-colors text-left">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-[#292426]/8">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-[#d03d36] mb-1.5">
                Current Role
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#292426]">
                Software Engineer
              </h3>
              <div className="text-base font-semibold text-[#292426]/80 mt-1 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#d03d36]" />
                <span>Syncfusion Software Private Limited</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-[#292426] border border-[#292426]/10 shadow-xs w-fit">
              <Calendar className="w-3.5 h-3.5 text-[#d03d36]" />
              <span>November 2025 – Present</span>
            </div>
          </div>

          {/* Description Paragraph - Clean, readable, balanced typography */}
          <p className="text-base sm:text-lg text-[#292426]/85 leading-relaxed mb-8 text-left">
            Working on Syncfusion's DOCX Editor, contributing to product development and continuous improvements. My work involves developing features, resolving customer-reported issues, debugging complex application behavior, and integrating APIs. I also work on document-editing functionality, testing, and validating changes to maintain product quality.
          </p>

          {/* Technologies Used */}
          <div className="pt-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#71696A] mb-3">
              Technologies & Tools:
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-[#292426] border border-[#292426]/10 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
