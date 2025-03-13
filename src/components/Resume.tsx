
import React from 'react';
import SectionTitle from './SectionTitle';
import { FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { EXPERIENCE, EDUCATION, RESUME_URL } from '@/lib/constants';

const Resume: React.FC = () => {
  const experienceRef = useScrollReveal();
  const educationRef = useScrollReveal();
  const buttonRef = useScrollReveal();

  return (
    <section id="resume" className="section-container bg-secondary/50">
      <SectionTitle title="RESUME" subtitle="My Experience & Education" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div ref={experienceRef}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </span>
            Experience
          </h3>
          
          <div className="space-y-8">
            {EXPERIENCE.map((item, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-xl relative border-l-4 border-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-muted-foreground mb-1">{item.company}</p>
                <p className="text-sm font-medium bg-secondary/50 inline-block px-2 py-1 rounded mb-3">{item.date}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div ref={educationRef}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </span>
            Education
          </h3>
          
          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-xl relative border-l-4 border-primary transition-all duration-300 hover:translate-x-1"
              >
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                <h4 className="text-xl font-bold">{item.degree}</h4>
                <p className="text-muted-foreground mb-1">{item.institution}</p>
                <p className="text-sm font-medium bg-secondary/50 inline-block px-2 py-1 rounded">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center" ref={buttonRef}>
        <a 
          href={RESUME_URL}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md focus-ring"
        >
          <FileText className="h-5 w-5" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Resume;
