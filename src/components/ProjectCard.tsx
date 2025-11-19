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
        x: 4,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: "8px 8px 0px 0px rgba(var(--shadow-color), 1)",
      }}
      initial={{ transformPerspective: 1000 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden border-b-2 border-black dark:border-white group">
        <motion.img
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover filter grayscale"
          whileHover={{ filter: "grayscale(0%)", scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {categories && categories[0] && (
          <div className="absolute top-0 right-0 bg-secondary text-black font-bold text-xs px-3 py-1 border-l-2 border-b-2 border-black dark:border-white z-10">
            {project.categories[0].toUpperCase()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-black uppercase mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground font-medium mb-6 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-black dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-4 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black py-2 font-bold text-sm hover:bg-primary transition-colors border-2 border-transparent"
            >
              <Github size={18} /> CODE
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black dark:bg-black dark:text-white border-2 border-black dark:border-white py-2 font-bold text-sm hover:bg-secondary transition-colors"
            >
              <ExternalLink size={18} /> DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;