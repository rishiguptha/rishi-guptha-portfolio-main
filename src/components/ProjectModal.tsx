// src/components/ProjectModal.tsx
import React from 'react';
import { createRipple } from "@/lib/ripple";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={(e) => createRipple(e)}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          View Project
        </button>
      </DialogTrigger>
      
      {/* The modal content inherits your theme styling */}
      <DialogContent className="max-w-md bg-background text-foreground">
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
        
        <div className="mt-4">
          <h4 className="font-bold mb-2">Technologies:</h4>
          <ul className="list-disc pl-5">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        
        <DialogClose className="absolute top-2 right-2 p-2">
          <X className="h-4 w-4" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
