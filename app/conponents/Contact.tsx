"use client";

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Send, CheckCircle2 } from "lucide-react"

const Github = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    </svg>
);

const contacts = [
    {
        icon: Mail,
        label: "Email",
        value: "fighterkab123@gmail.com",
        href: "mailto:fighterkab123@gmail.com",
        color: "from-primary/50 to-secondary/50"
    },
    {
        icon: Github,
        label: "Github",
        value: "fighternaja",
        href: "https://github.com/fighternaja",
        color: "from-secondary/50 to-accent/50"
    }
]
export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (!res.ok) throw new Error("Server error");
            setIsSubmitted(true);
            e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background orb */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
            </div>
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                        <span className="text-white">Let's</span> <span className="text-zinc-500">Connect</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative block"
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300`} />

                                <div className="relative p-6 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-xl shadow-lg hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-1">
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.color}`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-400 mb-1">{contact.label}</p>
                                            <p className="font-medium text-white">{contact.value}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-50" />

                    <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                        <h3 className="mb-6 text-center text-2xl font-bold text-white">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm text-zinc-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-zinc-500 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-zinc-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-zinc-500 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm text-zinc-400">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-zinc-500 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        SENDING...
                                    </span>
                                ) : isSubmitted ? (
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        MESSAGE SENT!
                                    </span>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        SEND MESSAGE
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center text-muted-foreground"
                >
                    <p>© 2026 Panuwich Thammawong. All rights reserved.</p>
                </motion.div>
            </div>
        </section>
    )
}