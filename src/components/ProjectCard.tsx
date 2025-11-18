import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
    categories?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, imageUrl, githubLink, liveLink, categories } = project;

  return (
    <motion.div 
      className="h-full flex flex-col bg-white dark:bg-card border-2 border-black dark:border-white shadow-neo transition-all duration-200"
      whileHover={{ 
        y: -8, 
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
        x: 4,
        y: 4
      }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden border-b-2 border-black dark:border-white group">
        <motion.img 
          src={imageUrl || '/placeholder.svg'} 
          alt={title} 
          className="w-full h-full object-cover filter grayscale"
          whileHover={{ grayscale: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {categories && categories[0] && (
            <div className="absolute top-0 right-0 bg-secondary text-black font-bold text-xs px-3 py-1 border-l-2 border-b-2 border-black z-10">
              {categories[0].toUpperCase()}
            </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-black mb-3 uppercase leading-none tracking-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow font-medium leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-black dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 pt-4 border-t-2 border-dashed border-gray-300 mt-auto">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 font-bold text-sm hover:bg-primary transition-colors border-2 border-transparent"
            >
              <Github size={16} /> CODE
            </motion.a>
          )}
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black border-2 border-black py-2 font-bold text-sm hover:bg-secondary transition-colors"
            >
              <ExternalLink size={16} /> DEMO
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;