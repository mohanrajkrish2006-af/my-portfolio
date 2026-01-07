import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Target } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'A dedicated B.Tech Information Technology student with a strong passion for software development and problem-solving.',
    },
    {
      icon: Code,
      title: 'What I Do',
      description: 'I build web applications, develop Java programs, and explore the latest technologies in cloud computing and DevOps.',
    },
    {
      icon: Target,
      title: 'My Goals',
      description: 'To become a skilled software engineer and contribute to innovative projects that make a positive impact.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4">
                Hello! I'm <span className="gradient-text">Mohanraj</span>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I'm currently pursuing my B.Tech in Information Technology with a deep interest in programming and software development. My journey in tech started with learning Java and has since expanded to web development, data structures, and exploring cloud technologies.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I believe in continuous learning and enjoy taking on challenging projects that push me to grow as a developer. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or solving algorithmic problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently seeking internship opportunities and fresher roles where I can apply my skills and contribute to meaningful projects while continuing to learn from experienced professionals.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 flex gap-4 items-start hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
