import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import HeroCodeSnippet from '@/components/HeroCodeSnippet';
import { useTheme } from '@/hooks/useTheme';
import { RESUME_URL, CONTACT_INFO } from '@/lib/constants';

const Index = () => {
  useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section - Side by Side Layout */}
      <section className="relative min-h-screen flex items-center pt-20 grain">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Open to opportunities
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="block text-foreground">Rishi Guptha</span>
                <span className="block text-muted-foreground/60">Mankala</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed"
              >
                I build <span className="text-primary font-medium">data systems</span> and{' '}
                <span className="text-primary font-medium">AI products</span> that scale.
                <br />
                <span className="text-base opacity-70">
                  MS in Data Science · Ex-Nevara AI, Kimberly-Clark
                </span>
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                </a>
                <a
                  href={RESUME_URL}
                  download
                  className="px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-card/50 font-medium transition-all"
                >
                  Download CV
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-8 pt-6 border-t border-border"
              >
                {[
                  { value: '3+', label: 'Years experience' },
                  { value: '10+', label: 'Pipelines shipped' },
                  { value: '80%', label: 'Time saved (Nevara)' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Code Snippet */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <HeroCodeSnippet />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Other sections */}
      <About />
      <Resume />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 Rishi Guptha Mankala
            </div>
            <div className="flex gap-6">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;