import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Globe, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with HTML, CSS, and JavaScript featuring modern UI design, smooth animations, and mobile-first approach.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Globe,
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Student Management System',
    description: 'A Java console application for managing student records with features like CRUD operations, search functionality, and data persistence.',
    technologies: ['Java', 'OOPs', 'File I/O'],
    icon: Terminal,
    github: 'https://github.com',
  },
  {
    title: 'Calculator Web App',
    description: 'An interactive calculator application with a clean UI, supporting basic arithmetic operations and keyboard input.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Code,
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'To-Do List Application',
    description: 'A task management web app with features like add, edit, delete tasks, local storage persistence, and filter options.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Code,
    github: 'https://github.com',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-secondary/20">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 group hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-semibold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                {project.live && (
                  <Button asChild size="sm">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
