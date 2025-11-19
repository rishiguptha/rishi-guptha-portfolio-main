import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Terminal, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import TypedName from '@/components/TypedName';
import { useTheme } from '@/hooks/useTheme';
import { RESUME_URL } from '@/lib/constants';

const Index = () => {
  useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: 5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 border-b-4 border-black dark:border-white overflow-hidden">
        {/* Abstract Motion Background */}
        <div className="absolute inset-0 overflow-hidden -z-10 opacity-5 pointer-events-none">
          <motion.div
            style={{ y }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-multiply filter blur-3xl"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            <div className="relative">
              <motion.h1
                variants={itemVariants}
                className="heading-xl relative z-20 text-black dark:text-white"
              >
                HI, I'M <br />
                <span className="relative inline-block text-primary">
                  <TypedName text="RISHI GUPTHA" speed={100} />
                </span>
              </motion.h1>
              {/* Decorative elements behind text */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-2 left-0 w-full h-6 bg-secondary/30 -z-10 origin-left transform -rotate-1"
              />
            </div>

            <motion.p variants={itemVariants} className="text-xl font-medium text-muted-foreground max-w-lg border-l-4 border-secondary pl-4">
              Data Scientist & Engineer. <br />
              Turning messy data into <span className="bg-secondary text-secondary-foreground px-1 font-bold">strict logic</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)", x: 4, y: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 font-bold border-2 border-transparent shadow-neo transition-all flex items-center gap-2"
              >
                VIEW WORK <ArrowDown size={20} />
              </motion.button>

              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)", x: 4, y: 4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-black text-black dark:text-white px-8 py-4 font-bold border-2 border-black dark:border-white shadow-neo transition-all flex items-center gap-2"
              >
                RESUME <Download size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="hidden md:block relative"
          >
            <motion.div
              className="relative z-10 bg-white p-2 border-4 border-black shadow-neo-lg"
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              <img src="/profile.jpeg" alt="Rishi" className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-500" />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-secondary border-2 border-black p-4 font-mono text-xs font-bold shadow-neo"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                &lt;Coder /&gt;
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t-4 border-black dark:border-white bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="heading-lg mb-6"
          >
            LET'S BUILD SOMETHING
          </motion.h2>
          <div className="flex justify-center gap-6 font-bold font-mono">
            {[
              { name: "GITHUB", href: "https://github.com/rishiguptha" },
              { name: "LINKEDIN", href: "https://www.linkedin.com/in/rishi-guptha/" },
              { name: "MAIL", href: "mailto:rishiguptha.mankala@stonybrook.edu" }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="hover:bg-black hover:text-white px-2 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <p className="mt-8 font-mono text-sm opacity-60">© {new Date().getFullYear()} Rishi Guptha Mankala.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;