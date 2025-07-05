import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TypedName from '@/components/TypedName';
import { useTheme } from '@/hooks/useTheme';
import { RESUME_URL } from '@/lib/constants';

const Index = () => {
  // Initialize theme
  useTheme();

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Large gradient orbs */}
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />
          </div>

          {/* Hero Content */}
          <motion.div
            className="container mx-auto px-4 py-16 text-center relative z-10"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Welcome to my portfolio</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="heading-xl mb-6"
            >
              Hello, I'm{' '}
              <br className="hidden sm:block" />
              <TypedName 
                text="Rishi Guptha Mankala" 
                speed={100} 
                className="text-gradient font-extrabold" 
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              A passionate{' '}
              <span className="text-gradient-accent font-semibold">Data Scientist & Engineer</span>{' '}
              dedicated to transforming complex data into meaningful stories and actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Main Content */}
        <main>
          <About />
          <Resume />
          <Projects />
          <Contact />
        </main>
        
        {/* Enhanced Footer */}
        <footer className="relative py-12 border-t border-border/20">
          <div className="absolute inset-0 glass-effect" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Rishi Guptha Mankala
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Transforming data into insights, one project at a time.
                </p>
                <div className="flex justify-center items-center space-x-6 mb-6">
                  <motion.a
                    href="https://github.com/rishiguptha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/rishiguptha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="mailto:rishiguptha.mankala@stonybrook.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    Email
                  </motion.a>
                </div>
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Rishi Guptha Mankala. All rights reserved.
                </p>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
