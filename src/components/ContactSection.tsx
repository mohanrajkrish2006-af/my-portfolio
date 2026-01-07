import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    name: 'Email',
    value: 'mohanraj@example.com',
    href: 'mailto:mohanraj@example.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    value: 'github.com/mohanraj',
    href: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/mohanraj',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">Contact Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm currently looking for internship opportunities and fresher roles. If you have any openings or want to collaborate on a project, feel free to reach out!
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground mb-6">
                <MapPin size={20} className="text-primary" />
                <span>Tamil Nadu, India</span>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-card hover:border-primary/50 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{link.name}</p>
                      <p className="font-medium text-sm">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right - Quick Message CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                <Send size={32} />
              </div>
              <h4 className="font-heading text-xl font-semibold mb-3">Ready to Connect?</h4>
              <p className="text-muted-foreground text-sm mb-6">
                Drop me an email and I'll get back to you as soon as possible!
              </p>
              <Button asChild size="lg" className="glow-effect w-full">
                <a href="mailto:mohanraj@example.com">
                  <Mail size={18} className="mr-2" />
                  Send Email
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
