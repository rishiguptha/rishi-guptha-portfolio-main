import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
    categories?: string[];
    metrics?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, imageUrl, githubLink, liveLink, categories, metrics } = project;

  return (
    <motion.div
      className="h-full flex flex-col glass rounded-xl overflow-hidden border border-border card-hover group"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <motion.img
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          style={{ filter: 'saturate(0.8)' }}
          whileHover={{ filter: 'saturate(1)' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category badge */}
        {categories && categories[0] && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {categories[0]}
          </div>
        )}

        {/* Folder icon */}
        <div className="absolute top-3 left-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
          <Folder size={16} className="text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {metrics.slice(0, 2).map((metric, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-md bg-secondary/20 text-secondary font-medium">
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs px-2 py-1 text-muted-foreground">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-3 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all text-sm font-medium"
            >
              <Github size={16} /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:shadow-glow transition-all text-sm font-medium"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;