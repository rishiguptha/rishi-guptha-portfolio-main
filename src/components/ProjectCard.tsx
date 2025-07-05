// src/components/ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, imageUrl, githubLink, liveLink } = project;

  return (
    <motion.div 
      className="bg-card rounded-lg overflow-hidden border border-border h-full flex flex-col group"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-end space-x-4 mt-auto pt-4 border-t border-border">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`GitHub for ${title}`}
            >
              <Github size={20} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Live link for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;