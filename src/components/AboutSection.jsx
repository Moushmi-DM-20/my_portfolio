import React from 'react';
import { Calendar, GraduationCap, Briefcase, MapPin } from 'lucide-react';

export default function AboutSection() {
  const milestones = [
    {
      type: 'work',
      title: 'Software Developer',
      institution: 'Syncfusion Software Private Limited',
      period: 'November 2025 – Present',
      location: 'Chennai, India',
      details: 'Contributing to document editor product engineering, investigating defects, and maintaining application features.'
    },
    {
      type: 'education',
      title: 'B.E. Computer Science and Engineering',
      institution: 'University College of Engineering, Tindivanam',
      period: '2021 – 2025',
      location: 'Tindivanam, Tamil Nadu',
      details: 'Graduated with a strong foundation in Java, SQL, Object-Oriented Programming and Data Structures and Algorithm.'
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate (HSC)',
      institution: "St. Joseph's Matriculation Higher Secondary School",
      period: '2020 – 2021',
      location: 'Thirithuvapuram, Tamil Nadu',
      details: 'Completed higher secondary education with focus on Mathematics and Computer Science.'
    },
    {
      type: 'education',
      title: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Deva Kala Nilayam Matriculation Higher Secondary School',
      period: '2018 – 2019',
      location: 'Maruthancode, Tamil Nadu',
      details: 'Completed secondary school education with academic distinction.'
    }
  ];

  return (
    <section id="about" className="py-20 px-5 sm:px-10 lg:px-16 bg-[#FAF8F6] text-[#292426]">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple professional heading & Introduction */}
        <div className="mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292426] mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#292426]/85 leading-relaxed max-w-3xl">
            <p className="text-left">
              I'm a Software Developer at Syncfusion, contributing to an enterprise document editor. My work involves feature development, debugging, resolving customer-reported issues, and working with APIs.
            </p>
            <p className="text-left">
              I enjoy coding, exploring new technologies, and understanding the logic behind software. I'm particularly interested in Java, backend development, and continuously improving my engineering skills.
            </p>
          </div>
        </div>

        {/* Education & Career Progression Timeline with Line/Graph Structure */}
        <div className="pt-8 border-t border-[#292426]/10 text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-[#292426] mb-8">
            Education & Career Progression
          </h3>

          {/* Timeline Line Container with pixel-perfect mathematical center alignment */}
          <div className="relative space-y-6 sm:space-y-7 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-[2px] before:bg-[#d03d36]">
            {milestones.map((item, idx) => {
              const isWork = item.type === 'work';

              return (
                <div key={idx} className="relative pl-7 sm:pl-8 group">
                  {/* Timeline Graph Node / Marker - perfectly centered at x = 8px on the line */}
                  <div 
                    className={`absolute left-0 top-3 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                      isWork
                        ? 'bg-[#d03d36] border-white ring-2 ring-[#d03d36]/30 shadow-xs'
                        : 'bg-white border-[#d03d36] ring-2 ring-white shadow-xs'
                    }`} 
                  />

                  {/* Milestone Card Content */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#292426]/8 shadow-xs hover:border-[#d03d36]/30 transition-all text-left">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                          isWork 
                            ? 'bg-red-50 text-[#d03d36] border-red-100' 
                            : 'bg-[#FAF8F6] text-[#71696A] border-[#292426]/8'
                        }`}>
                          {isWork ? 'Experience' : 'Education'}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#292426]">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#d03d36] sm:text-right">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-[#292426]/80 mb-2">
                      {item.institution}
                      {item.location && (
                        <span className="text-xs font-normal text-[#71696A] ml-2">
                          · {item.location}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#71696A] leading-relaxed text-left">
                      {item.details}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
