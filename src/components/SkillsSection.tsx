import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Java', level: 85, category: 'Languages' },
  { name: 'Python', level: 75, category: 'Languages' },
  { name: 'HTML', level: 90, category: 'Web' },
  { name: 'CSS', level: 85, category: 'Web' },
  { name: 'JavaScript', level: 80, category: 'Web' },
  { name: 'OOPs', level: 85, category: 'Concepts' },
  { name: 'Data Structures', level: 75, category: 'Concepts' },
  { name: 'Cloud Basics', level: 60, category: 'DevOps' },
  { name: 'DevOps Basics', level: 55, category: 'DevOps' },
  { name: 'Git', level: 70, category: 'Tools' },
];

const categories = ['Languages', 'Web', 'Concepts', 'DevOps', 'Tools'];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">What I Know</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">My Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  className="h-full rounded-full"
                  style={{ background: 'var(--gradient-primary)' }}
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 inline-block">{skill.category}</span>
            </motion.div>
          ))}
        </div>

        {/* Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {categories.map((category) => (
            <span key={category} className="skill-badge">
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
