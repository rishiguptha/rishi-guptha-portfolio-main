import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      setIsSubmitting(false);
      toast.error('An error occurred. Please try again.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      toast.error('Configuration error. Please contact the administrator.');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          toast.success('Your message has been sent successfully!');
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          toast.error('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };
  
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/rishiguptha" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/rishi-guptha/" }
  ];

  return (
    <motion.section
      id="contact"
      className="section-container"
    >
      <div className="container mx-auto px-4">
        <SectionTitle title="CONTACT" subtitle="Get In Touch" />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side: Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Have a question, a project proposal, or just want to say hello? Go ahead.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <Mail size={24} className="text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-primary" />
                <span className="text-muted-foreground">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-primary" />
                <span className="text-muted-foreground">{CONTACT_INFO.location}</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Right side: Contact form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            variants={itemVariants}
          >
            <Input name="name" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <Input name="subject" placeholder="Subject" required />
            <Textarea name="message" placeholder="Your Message" required rows={5} />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </motion.div>
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
