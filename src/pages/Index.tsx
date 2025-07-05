import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TypedName from '@/components/TypedName';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  // Initialize theme
  useTheme();
  
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm{' '}
              <TypedName 
                text="Rishi Guptha Mankala" 
                speed={150} 
                className="text-gradient font-extrabold" 
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Data Scientist and Engineer dedicated to transforming complex data into meaningful stories and actionable insights.
            </p>
          </div>
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-8 text-center border-t border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Rishi Guptha Mankala. All Rights Reserved.
          </p>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Index;
