import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: 'ShopSphere E-Commerce Application',
      category: 'Frontend & APIs',
      desc: 'A React-based e-commerce application exploring reusable UI components, product presentation, cart state management, and API-driven data.',
      tags: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
      status: 'Completed',
      github: 'https://github.com/Moushmi-DM-20'
    },
    {
      id: 2,
      title: 'Java Swing Quiz Application',
      category: 'Desktop & OOP',
      desc: 'A Java desktop quiz application exploring user interaction, application logic, and file handling for score persistence.',
      tags: ['Java', 'Java Swing', 'OOP', 'File I/O'],
      status: 'Completed',
      github: 'https://github.com/Moushmi-DM-20'
    },
    {
      id: 3,
      title: 'DOCX Document Processing Architecture',
      category: 'Backend & APIs',
      desc: 'Technical exploration into document editor structure, word processing schemas, and programmatic text manipulation.',
      tags: ['C#', '.NET Core', 'DOCX / OpenXML', 'APIs'],
      status: 'Product Domain',
      note: 'DOCX Product'
    },
    {
      id: 4,
      title: 'Deepfake Video Detection',
      category: 'Computer Vision',
      desc: 'Exploration of frame-level artifact analysis and machine learning models for detecting synthesized video media.',
      tags: ['Python', 'OpenCV', 'Deep Learning'],
      status: 'Academic Research',
      note: 'Exploratory engineering'
    }
  ];

  return (
    <section id="work" className="py-20 px-5 sm:px-10 lg:px-16 bg-[#FAF8F6] text-[#292426] border-t border-[#292426]/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Simple professional heading */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292426] mb-2">
            Selected Work
          </h2>
          <p className="text-base text-[#71696A]">
            A selection of projects reflecting application development, APIs, and practical software engineering.
          </p>
        </div>

        {/* Compact Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#292426]/8 shadow-xs hover:border-[#d03d36]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta status & category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-[#71696A] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF8F6] text-[#71696A] border border-[#292426]/8">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#292426] mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#71696A] leading-relaxed mb-4 text-left">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[#FAF8F6] text-[#292426]/80 border border-[#292426]/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link / Note */}
                <div className="pt-3 border-t border-[#292426]/8 flex items-center justify-between text-xs">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#d03d36] hover:text-[#922626] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[#71696A]">
                      {project.note}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
