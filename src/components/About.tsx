import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Trophy, Coffee, Rocket, Heart } from 'lucide-react';
import TerminalSkills from './TerminalSkills';
import SectionTitle from './SectionTitle';

const About = () => {
  const driveItems = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I love untangling complex data puzzles. The messier, the better.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Impact-Driven",
      description: "Building models that actually ship to production, not just notebooks.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "New framework? Give me a weekend. New language? Maybe two.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Night Owl",
      description: "Best code happens after midnight. Fight me. ☕",
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

      <div className="container mx-auto px-6">
        <SectionTitle title="WHO AM I?" subtitle="About Me" />

        {/* Main intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-10 border border-border card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Software & Data Engineer
                </h3>
                <p className="text-muted-foreground">
                  MS Data Science @ Stony Brook University • Class of 2025
                </p>
              </div>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hey! I'm a grad student who loves{' '}
                <span className="text-primary font-semibold">building things that scale</span>.
                From architecting AWS Lambda pipelines that handle 100+ users to training
                PyTorch models that actually work in production—I ship code that matters.
              </p>
              <p className="text-muted-foreground">
                Most recently, I built an AI-powered sales coaching platform at Nevara AI
                that reduced manual review time by 80%. Before that, I was migrating 10,000+
                data assets at Kimberly-Clark and building computer vision systems for sports analytics.
              </p>
              <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4 mt-6">
                Fun fact: My record for debugging a production issue at 3 AM is 47 minutes.
                The fix? A missing comma in a JSON config. We don't talk about that. 🙃
              </p>
            </div>
          </div>
        </motion.div>

        {/* What Drives Me */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            What Drives Me
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {driveItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border border-border card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
          >
            Tech Stack
          </motion.h3>
          <TerminalSkills />
        </div>
      </div>
    </section>
  );
};

export default About;