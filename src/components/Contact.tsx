import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import MagneticButton from './MagneticButton';

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
                toast.success('Message sent! (Demo mode)');
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

    const contactItems = [
        { icon: <Mail size={20} />, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
        { icon: <Phone size={20} />, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
        { icon: <MapPin size={20} />, label: 'Location', value: CONTACT_INFO.location },
    ];

    const socialLinks = [
        { icon: <Github size={22} />, href: CONTACT_INFO.github, label: 'GitHub' },
        { icon: <Linkedin size={22} />, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="section-container relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-20 -z-10" />

            <div className="container mx-auto px-6">
                <SectionTitle title="GET IN TOUCH" subtitle="Contact Me" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-muted-foreground mb-8">
                                Got an interesting project? Want to collaborate? Or just want to say hi?
                                I'd love to hear from you! ☕
                            </p>

                            <div className="space-y-4">
                                {contactItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                                            >
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground">{item.label}</p>
                                                    <p className="font-medium">{item.value}</p>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-3">
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-muted-foreground">{item.label}</p>
                                                    <p className="font-medium">{item.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="glass rounded-2xl p-8 border border-border">
                            <h3 className="text-xl font-bold mb-6">Find Me Online</h3>
                            <div className="flex flex-wrap gap-4">
                                {/* GitHub */}
                                <MagneticButton
                                    as="a"
                                    href={CONTACT_INFO.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    strength={0.4}
                                    className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300"
                                >
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 group-hover:from-primary group-hover:to-primary/70 transition-all">
                                        <Github size={18} className="text-white" />
                                    </div>
                                    <span className="font-medium text-sm">GitHub</span>
                                </MagneticButton>

                                {/* LinkedIn */}
                                <MagneticButton
                                    as="a"
                                    href={CONTACT_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    strength={0.4}
                                    className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-[#0077b5]/50 hover:bg-gradient-to-r hover:from-[#0077b5]/10 hover:to-transparent transition-all duration-300"
                                >
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0077b5] to-[#005582] transition-all">
                                        <Linkedin size={18} className="text-white" />
                                    </div>
                                    <span className="font-medium text-sm">LinkedIn</span>
                                </MagneticButton>

                                {/* Schedule Call */}
                                {CONTACT_INFO.calcom && (
                                    <MagneticButton
                                        as="a"
                                        href={CONTACT_INFO.calcom}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        strength={0.4}
                                        className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-glow transition-all duration-300"
                                    >
                                        <Calendar size={18} />
                                        <span className="font-medium text-sm">Schedule a Call</span>
                                    </MagneticButton>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="glass rounded-2xl p-8 border border-border"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Subject</label>
                                <input
                                    name="subject"
                                    placeholder="What's this about?"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                            >
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <motion.span
                                            key="sending"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Sending...
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="send"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            Send Message <Send size={18} />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;