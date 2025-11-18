import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId) {
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Message sent! (Simulation mode)');
            form.current?.reset();
        }, 1000);
        return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey })
      .then(() => {
          setIsSubmitting(false);
          toast.success('Message sent successfully!');
          form.current?.reset();
      }, (error) => {
          setIsSubmitting(false);
          toast.error('Failed to send message.');
          console.log(error.text);
      });
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="section-container bg-white dark:bg-background border-t-4 border-black dark:border-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="GET IN TOUCH" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="bg-secondary border-2 border-black dark:border-white p-8 shadow-neo">
                    <h3 className="text-2xl font-black uppercase mb-6">Contact Details</h3>
                    <div className="space-y-6 font-bold font-mono">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 hover:text-primary transition-colors group">
                            <div className="bg-white dark:bg-black p-2 border-2 border-black dark:border-white group-hover:rotate-12 transition-transform"><Mail className="w-6 h-6" /></div>
                            {CONTACT_INFO.email}
                        </a>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 hover:text-primary transition-colors group">
                             <div className="bg-white dark:bg-black p-2 border-2 border-black dark:border-white group-hover:rotate-12 transition-transform"><Phone className="w-6 h-6" /></div>
                            {CONTACT_INFO.phone}
                        </a>
                        <div className="flex items-center gap-4 group">
                             <div className="bg-white dark:bg-black p-2 border-2 border-black dark:border-white group-hover:rotate-12 transition-transform"><MapPin className="w-6 h-6" /></div>
                            {CONTACT_INFO.location}
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-card border-2 border-black dark:border-white p-8 shadow-neo">
                    <h3 className="text-2xl font-black uppercase mb-6">Socials</h3>
                    <div className="flex gap-4">
                        <motion.a 
                            href={CONTACT_INFO.github} 
                            target="_blank" 
                            className="p-4 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a 
                            href={CONTACT_INFO.linkedin} 
                            target="_blank" 
                            className="p-4 border-2 border-black dark:border-white hover:bg-[#0077b5] hover:text-white transition-all shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div 
                className="bg-white dark:bg-card border-2 border-black dark:border-white p-8 shadow-neo-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl font-black uppercase mb-6">Send a Message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-2">
                            <label className="font-bold uppercase text-sm">Name</label>
                            <Input name="name" placeholder="YOUR NAME" required />
                        </div>
                        <div className="space-y-2">
                            <label className="font-bold uppercase text-sm">Email</label>
                            <Input name="email" type="email" placeholder="YOUR@EMAIL.COM" required />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="space-y-2"
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <label className="font-bold uppercase text-sm">Subject</label>
                        <Input name="subject" placeholder="HELLO WORLD" required />
                    </motion.div>
                    <motion.div 
                        className="space-y-2"
                        variants={formItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <label className="font-bold uppercase text-sm">Message</label>
                        <Textarea name="message" placeholder="YOUR MESSAGE HERE..." required rows={5} />
                    </motion.div>
                    <Button type="submit" disabled={isSubmitting} className="w-full text-lg h-14">
                        <AnimatePresence mode="wait">
                           {isSubmitting ? "SENDING..." : <span className="flex items-center gap-2">SEND MESSAGE <Send className="w-5 h-5" /></span>}
                        </AnimatePresence>
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;