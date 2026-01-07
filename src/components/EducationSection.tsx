import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                <GraduationCap size={32} />
              </div>

              {/* Degree */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                B.Tech in Information Technology
              </h3>

              {/* University */}
              <p className="text-lg text-muted-foreground mb-6">
                [Your University Name]
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>2021 - 2025 (Expected)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-heading font-semibold mb-4">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Management',
                    'Web Development',
                    'Operating Systems',
                    'Computer Networks',
                    'Cloud Computing Basics',
                    'Software Engineering',
                  ].map((course) => (
                    <span key={course} className="skill-badge text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              Currently in my final year, actively seeking internship and job opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
