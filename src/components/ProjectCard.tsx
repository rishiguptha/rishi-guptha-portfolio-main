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
    metrics?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, githubLink, liveLink, metrics } = project;

  return (
    <motion.article
      className="group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={16} className="text-muted-foreground" />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={16} className="text-muted-foreground" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {metrics.slice(0, 2).map((metric, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground"
            >
              {tech}{technologies.indexOf(tech) < Math.min(technologies.length, 4) - 1 ? ' ·' : ''}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;