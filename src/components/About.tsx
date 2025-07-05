import { motion } from 'framer-motion';
import { Code, Brain, Target, Coffee, Trophy} from 'lucide-react';
import { TECHNICAL_SKILLS} from '../lib/constants';
import ProfileImage from './ProfileImage';

const About = () => {
  const driveItems = [
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Problem Solving",
      description: "I thrive on tackling complex data challenges and finding innovative solutions.",
      color: "blue"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Impact-Driven",
      description: "Every model I build aims to create real-world value and measurable outcomes.",
      color: "purple"
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-400" />,
      title: "Continuous Learning",
      description: "The field evolves rapidly, and I stay ahead with constant skill development.",
      color: "green"
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-400" />,
      title: "Coffee & Code",
      description: "Best solutions emerge from late nights, strong coffee, and clean code.",
      color: "orange"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data Science Researcher passionate about transforming complex data into actionable insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProfileImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
                        <p className="text-lg text-foreground/80 leading-relaxed">
             I'm a graduate student at <span className="text-purple-500 font-semibold">Stony Brook University</span> with a passion for uncovering stories hidden within data. My goal is to leverage my technical skills to build intelligent systems that solve real-world problems and drive impactful decisions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
             When I'm not wrangling data, you can find me exploring new technologies or enjoying a good book. Feel free to reach out—I'm always open to new challenges and collaborations.
            </p>
          </motion.div>
        </div>

        {/* What Drives Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">What Drives Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {driveItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`modern-card group hover:scale-105 transition-all duration-300 hover:border-${item.color}-400/50`}
              >
                <div className="flex flex-col items-center text-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(TECHNICAL_SKILLS).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-blue-400 mr-3" />
                    <h4 className="text-xl font-semibold text-foreground">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
