// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  readme: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  readme,
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl glass-panel transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      <div className="p-6 relative z-10 flex flex-col min-h-[250px]">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <button
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;