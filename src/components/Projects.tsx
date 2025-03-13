
import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS } from '@/lib/constants';

const Projects: React.FC = () => {
  const projectsRef = useScrollReveal();

  return (
    <section id="projects" className="section-container">
      <SectionTitle title="PROJECTS" subtitle="My Recent Work" />
      
      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="opacity-0 animate-fade-in-up" 
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
