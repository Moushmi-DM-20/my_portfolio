import React from 'react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Wrench, 
  Cpu, 
  GitBranch, 
  Database, 
  Server, 
  Workflow, 
  Bug, 
  Binary 
} from 'lucide-react';

export default function SkillsSection() {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: JavaIcon },
        { name: 'C#', icon: CSharpIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'SQL', icon: SqlIcon },
        { name: 'Python', icon: PythonIcon },
      ]
    },
    {
      title: 'Frameworks and Development',
      skills: [
        { name: 'ASP.NET Core', icon: DotNetIcon },
        { name: 'ASP.NET MVC', icon: DotNetIcon },
        { name: 'Blazor', icon: BlazorIcon },
        { name: 'React', icon: ReactIcon },
        { name: 'HTML5', icon: HtmlIcon },
        { name: 'CSS3', icon: CssIcon },
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'VS Code', icon: VsCodeIcon },
        { name: 'IntelliJ IDEA', icon: IntelliJIcon },
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Object-Oriented Programming', icon: Workflow },
        { name: 'Data Structures & Algorithms', icon: Binary },
        { name: 'REST APIs', icon: Server },
        { name: 'Debugging & Root-Cause Analysis', icon: Bug },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-5 sm:px-10 lg:px-16 bg-[#FFFFFF] text-[#292426] border-t border-[#292426]/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Simple professional heading */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292426] mb-2">
            Technical Skills
          </h2>
          <p className="text-base text-[#71696A]">
            Core programming languages, frameworks, developer tools, and software engineering concepts.
          </p>
        </div>

        {/* Clean, unboxed skill layout with recognizable logos & clear labels */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d03d36] mb-6">
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
                {cat.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={sIdx} 
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2.5 text-[#292426]/80 group-hover:text-[#d03d36] group-hover:scale-110 transition-all duration-200">
                        <Icon className="w-9 h-9" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#292426]/90 group-hover:text-[#292426] transition-colors leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Custom crisp SVG technology logos
function JavaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function CSharpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M10 8.5a5 5 0 0 0-4 4.5 5 5 0 0 0 4 4.5" />
      <path d="M14 10v4" />
      <path d="M17 10v4" />
      <path d="M13 11h5" />
      <path d="M13 13h5" />
    </svg>
  );
}

function JavaScriptIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 16c0 1.5-1 2-2 2a2 2 0 0 1-1.5-.7" />
      <path d="M14 13.5c.8-.5 2-.5 2 .5 0 1.5-3 .8-3 2.5 0 1 1 1.5 2 1.5" />
    </svg>
  );
}

function TypeScriptIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 10h6" />
      <path d="M10 10v7" />
      <path d="M15 13.5c.8-.5 2-.5 2 .5 0 1.5-3 .8-3 2.5 0 1 1 1.5 2 1.5" />
    </svg>
  );
}

function SqlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function PythonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 9H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2v-2a2 2 0 0 1 2-2h3" />
      <path d="M12 15h5a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-2v2a2 2 0 0 1-2 2h-3" />
      <circle cx="8" cy="6.5" r="1" fill="currentColor" />
      <circle cx="16" cy="17.5" r="1" fill="currentColor" />
    </svg>
  );
}

function DotNetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15V9l5 6V9" />
      <circle cx="16.5" cy="14.5" r="1" fill="currentColor" />
    </svg>
  );
}

function BlazorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

function HtmlIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" />
      <path d="M8 8h8l-.5 5H9.5l.2 2.5 2.3.6 2.3-.6.2-1.5" />
    </svg>
  );
}

function CssIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4z" />
      <path d="M8 8h8l-.5 4.5H9.5l.2 2 2.3.6 2.3-.6.2-1.5" />
    </svg>
  );
}

function GitIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6" />
      <path d="M9 18h6" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function VsCodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16.5 2.5L7 10.5 3 7.5 1.5 9l4 4-4 4 1.5 1.5 4-3 9.5 8 6-3V5.5z" />
    </svg>
  );
}

function IntelliJIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="3" />
      <path d="M7 16h3" />
      <path d="M8.5 8v8" />
      <path d="M14 16h3" />
      <path d="M15.5 8v8" />
    </svg>
  );
}
