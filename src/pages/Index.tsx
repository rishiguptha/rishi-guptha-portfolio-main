import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Code2, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TypedName from '@/components/TypedName';
import ScrollProgress from '@/components/ScrollProgress';
import MagneticButton from '@/components/MagneticButton';
import KonamiCode from '@/components/KonamiCode';
import { useTheme } from '@/hooks/useTheme';
import { RESUME_URL } from '@/lib/constants';

const Index = () => {
  useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Konami Code Easter Egg */}
      <KonamiCode />

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-bg opacity-50" />

          {/* Gradient orbs */}
          <motion.div
            style={{ y, opacity }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px]"
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium">Open to opportunities</span>
            </motion.div>

            <div className="relative">
              <motion.h1
                variants={itemVariants}
                className="heading-xl relative z-20"
              >
                Hey, I'm <br />
                <span className="gradient-text">
                  <TypedName text="RISHI GUPTHA" speed={80} />
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Software & Data Engineer building{' '}
              <span className="text-foreground font-semibold">AI systems at scale</span>.
              <br />
              MS Data Science @ Stony Brook • Ex-Nevara AI
              <br />
              <span className="text-sm mt-2 block opacity-70">
                (From AWS Lambda pipelines to PyTorch models—I ship it all 🚀)
              </span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <MagneticButton
                as="button"
                strength={0.4}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.4}
                className="group glass px-8 py-4 rounded-lg font-bold border border-border hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                <span>Resume</span>
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </MagneticButton>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4"
            >
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Shipped' },
                { value: '∞', label: 'Cups of Coffee' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Code snippet aesthetic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block relative"
          >
            <motion.div
              className="relative z-10 glass rounded-xl overflow-hidden border border-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Code window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">about_me.py</span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm space-y-2">
                <div><span className="text-purple-400">class</span> <span className="text-yellow-400">DataEngineer</span><span className="text-foreground">:</span></div>
                <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span><span className="text-foreground">(self):</span></div>
                <div className="pl-8"><span className="text-foreground">self.name</span> <span className="text-primary">=</span> <span className="text-green-400">"Rishi Guptha"</span></div>
                <div className="pl-8"><span className="text-foreground">self.role</span> <span className="text-primary">=</span> <span className="text-green-400">"SWE | DE | AI"</span></div>
                <div className="pl-8"><span className="text-foreground">self.stack</span> <span className="text-primary">=</span> <span className="text-foreground">[</span></div>
                <div className="pl-12"><span className="text-green-400">"Python"</span><span className="text-foreground">,</span> <span className="text-green-400">"AWS"</span><span className="text-foreground">,</span></div>
                <div className="pl-12"><span className="text-green-400">"Spark"</span><span className="text-foreground">,</span> <span className="text-green-400">"PyTorch"</span></div>
                <div className="pl-8"><span className="text-foreground">]</span></div>
                <div className="pl-4 pt-2"><span className="text-purple-400">def</span> <span className="text-blue-400">current_focus</span><span className="text-foreground">(self):</span></div>
                <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Building AI systems @ scale 🚀"</span></div>
              </div>
            </motion.div>

            {/* Floating decorations */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-3 rounded-lg shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Code2 size={24} />
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-lg"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <Zap size={24} />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Let's Build Something <span className="gradient-text">Amazing</span>
          </motion.h2>
          <div className="flex justify-center gap-6 font-medium">
            {[
              { name: "GitHub", href: "https://github.com/rishiguptha" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/rishi-guptha/" },
              { name: "Email", href: "mailto:rishiguptha.mankala@stonybrook.edu" }
            ].map((link) => (
              <MagneticButton
                key={link.name}
                as="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.3}
                className="animated-underline px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </MagneticButton>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rishi Guptha Mankala • Built with
            <span className="text-secondary"> React</span> +
            <span className="text-primary"> TypeScript</span> +
            <span className="text-accent"> ☕</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground/50">
            Psst... try the Konami code 🎮
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;