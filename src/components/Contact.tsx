import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, Calendar, Copy, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast.error('Failed to copy email');
    }
  };
  
  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/rishiguptha",
      label: "GitHub",
      color: "hover:bg-gray-800 hover:text-white"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://linkedin.com/in/rishiguptha",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white"
    }
  ];

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: CONTACT_INFO.email,
      action: () => copyToClipboard(CONTACT_INFO.email),
      actionIcon: copiedEmail ? <CheckCircle size={16} /> : <Copy size={16} />,
      href: `mailto:${CONTACT_INFO.email}`,
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      description: "Let's have a conversation"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: CONTACT_INFO.location,
      description: "Available for local meetings"
    }
  ];

  return (
    <motion.section
      id="contact"
      className="section-container bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="CONTACT" subtitle="Let's Start a Conversation" />
        
        {/* Quick Contact Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              className="modern-card group cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={method.action || (() => method.href && window.open(method.href, '_blank'))}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{method.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm">{method.value}</p>
                    {method.actionIcon && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-1 rounded hover:bg-primary/10"
                      >
                        {method.actionIcon}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left side: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="modern-card">
              <h3 className="heading-md text-gradient mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects, discuss innovative ideas, or explore 
                opportunities in data science and engineering. Whether you have a specific project 
                in mind or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <span className="text-sm">Open to remote collaboration</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl border border-border/50 transition-all duration-300 ${link.color}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side: Contact form */}
          <motion.div variants={itemVariants}>
            <div className="modern-card">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="h-12 glass-effect border-border/20 focus:border-primary/50"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="h-12 glass-effect border-border/20 focus:border-primary/50"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input 
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    className="h-12 glass-effect border-border/20 focus:border-primary/50"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea 
                    name="message" 
                    placeholder="Tell me about your project or just say hello..." 
                    required 
                    rows={6}
                    className="glass-effect border-border/20 focus:border-primary/50 resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full h-12 btn-gradient font-semibold text-lg"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span 
                          key="loading"
                          className="flex items-center justify-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="send"
                          className="flex items-center justify-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Send size={18} />
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-2xl mx-auto glass-effect rounded-2xl p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Prefer a Quick Chat?
            </h3>
            <p className="text-muted-foreground mb-6">
              Sometimes a conversation is worth a thousand emails. Let's schedule a quick call to discuss your project.
            </p>
            <motion.a
              href={`mailto:${CONTACT_INFO.email}?subject=Let's Schedule a Call`}
              className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Schedule a Call
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
