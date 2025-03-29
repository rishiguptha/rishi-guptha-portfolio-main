// src/components/ProjectModal.tsx
import React from "react";
import { createRipple } from "@/lib/ripple";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    readme: string;       // optional new field
    githubLink: string;   // optional new field
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={(e) => createRipple(e)}
          className="w-full px-6 py-3 bg-primary text-primary-foreground 
                     rounded-full font-medium transition-transform duration-300 
                     hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          View Project
        </button>
      </DialogTrigger>

      <DialogContent className="bg-background text-foreground">
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="font-bold mb-2">Technologies:</h4>
          <ul className="list-disc pl-5">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Display the readme if present */}
        {project.readme && (
          <div className="mt-6">
            <h4 className="font-bold mb-2">Readme:</h4>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap">
              {project.readme}
            </div>
          </div>
        )}

        {/* Display a GitHub link if present */}
        {project.githubLink && (
          <div className="mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-secondary text-secondary-foreground rounded-full 
                         font-medium transition-transform duration-200 
                         hover:scale-105 active:scale-95 focus-ring"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297c-6.63 0-12 5.373-12 12 
                     0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                     0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61 
                     -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.73.084-.73 
                     1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492 
                     .997.107-.775.417-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 
                     0-1.31.468-2.38 1.236-3.22-.123-.303-.54-1.523.117-3.176 
                     0 0 1.01-.324 3.3 1.23.96-.267 1.98-.399 3-.405 
                     1.02.006 2.04.138 3 .405 2.28-1.554 3.29-1.23 3.29-1.23 
                     .657 1.653.24 2.873.117 3.176.77.84 1.236 1.91 
                     1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.81 1.096.81 2.21 
                     0 1.596-.014 2.88-.014 3.276 0 .317.21.687.82.57 
                     C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  clipRule="evenodd"
                />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        )}

        <DialogClose className="absolute top-2 right-2 p-2">
          <X className="h-4 w-4" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;