import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PROJECTS } from '@/lib/constants';

const Projects: React.FC = () => {
  const projectsRef = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = Array.from(
    new Set(PROJECTS.flatMap(project => project.categories))
  );

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => 
        project.categories.includes(selectedCategory)
      );

  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col items-center mb-12">
      <SectionTitle title="PROJECTS" subtitle="My Recent Work" />
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;