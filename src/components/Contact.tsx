import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle';
import { Mail, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

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

    return (
        <section id="contact" className="section-container">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <SectionTitle title="Get in Touch" />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground mb-12"
                    >
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </motion.p>

                    {/* Quick contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                        >
                            <Mail size={18} />
                            {CONTACT_INFO.email}
                        </a>
                        {CONTACT_INFO.calcom && (
                            <a
                                href={CONTACT_INFO.calcom}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-border hover:border-primary/50 font-medium transition-colors"
                            >
                                Schedule a Call
                                <ArrowRight size={16} />
                            </a>
                        )}
                    </motion.div>

                    {/* Contact form */}
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-left"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="How can I help?"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary/50 focus:outline-none transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;