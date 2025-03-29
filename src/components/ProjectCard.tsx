// src/components/ProjectCard.tsx
import React, { useState, useRef } from "react";
import ProjectModal from "./ProjectModal";

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
  // 1) Remove hover/tilt states and replace with a simple "active" toggle on click
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      // 2) Remove onMouseEnter, onMouseLeave, onMouseMove
      // 3) Instead, handle a click to toggle some state or do something else
      onClick={() => setIsActive(!isActive)}
      className="
        relative
        overflow-hidden
        rounded-xl
        h-full
        glass-panel
        transition-all
        duration-500
        cursor-pointer
      "
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={`${imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-opacity
            duration-700
          "
        />
      </div>

      <div className="p-6 relative z-10 flex flex-col min-h-[250px]">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 transition-colors">
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

        {/* Same "View Project" button & modal as before */}
        <ProjectModal
          project={{ title, description, technologies, imageUrl, readme, githubLink }}
        />
      </div>

      {/* 4) If 'isActive' is true, show a highlight overlay or some alternate effect */}
      {isActive && (
        <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
      )}
    </div>
  );
};

export default ProjectCard;