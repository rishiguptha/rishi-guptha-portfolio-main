import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';
import HeroCodeSnippet from '@/components/HeroCodeSnippet';
import CountUp from '@/components/CountUp';
import { useTheme } from '@/hooks/useTheme';
import useScrollState from '@/hooks/useScrollState';
import { RESUME_URL, CONTACT_INFO } from '@/lib/constants';

const Index = () => {
  useTheme();
  const { scrolled } = useScrollState();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to content - accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

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
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                Rishi Guptha
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-3 leading-relaxed"
              >
                I build <span className="text-primary font-medium">data systems</span> and{' '}
                <span className="text-primary font-medium">AI products</span> that scale.
              </motion.p>

              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
              >
                <span className="inline-block w-8 h-px bg-border" />
                MS in Data Science · Ex-Nevara AI, Kimberly-Clark
              </motion.div>

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
                  Download Resume
                </a>
              </motion.div>

              {/* Quick stats with count-up */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-8 pt-6 border-t border-border"
              >
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    <CountUp end={3} duration={1.2} />
                  </div>
                  <div className="text-xs text-muted-foreground">Engineering roles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    <CountUp end={10} suffix="+" duration={1.5} />
                  </div>
                  <div className="text-xs text-muted-foreground">Pipelines shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    <CountUp end={80} suffix="%" duration={1.8} />
                  </div>
                  <div className="text-xs text-muted-foreground">Time saved (Nevara)</div>
                </div>
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

        {/* Scroll indicator - fades on scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 0.6 }}
          transition={{ duration: 0.4, delay: scrolled ? 0 : 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-muted-foreground/50"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
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