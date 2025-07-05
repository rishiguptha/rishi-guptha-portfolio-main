import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();
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
          toast.success('Thank you for your message! I will get back to you soon.');
          form.current?.reset();
        },
        (error) => {
          setIsSubmitting(false);
          toast.error('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="section-container bg-secondary/50"
    >
      <SectionTitle title="CONTACT" subtitle="Get In Touch" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side: Let's Talk + contact info */}
        <div ref={infoRef}>
          <div className="glass-panel p-8 rounded-2xl h-full">
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you have any questions or want to discuss a potential project.
              I'm always open to new opportunities and challenges!
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {/* GitHub */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/rishiguptha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/rishiguptha
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* LinkedIn */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/rishi-guptha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/rishi-guptha
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side: Contact form */}
        <div ref={formRef}>
          <motion.form
            ref={form}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onSubmit={sendEmail}
            className="glass-panel p-8 rounded-2xl"
          >
            {[
              {
                name: 'name',
                label: 'Your Name',
                type: 'text',
                placeholder: 'John Doe',
              },
              {
                name: 'email',
                label: 'Your Email',
                type: 'email',
                placeholder: 'john@example.com',
              },
              {
                name: 'subject',
                label: 'Subject',
                type: 'text',
                placeholder: 'Project Inquiry',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                placeholder: "Hello, I'm interested in...",
              },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={field.name === 'message' ? 'mb-8' : 'mb-6'}
              >
                <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus-ring transition-colors resize-none"
                    placeholder={field.placeholder}
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus-ring transition-colors"
                    placeholder={field.placeholder}
                  />
                )}
              </motion.div>
            ))}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-transform duration-200 hover:scale-105 active:scale-95 focus-ring disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
