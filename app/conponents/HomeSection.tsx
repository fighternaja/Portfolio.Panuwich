import { motion } from "framer-motion";
import { ArrowRight, Download } from 'lucide-react';

export function HomeSection() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background orb */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-sm font-medium tracking-wider uppercase">
                                Panuwich Thammawong
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-6 font-bold leading-[1.1]"
                            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                        >
                            <span className="text-white block">Programmer</span>
                            <span className="text-white block mt-2">
                                Backend Developer
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-10 text-gray-400 max-w-lg leading-relaxed"
                            style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
                        >
                            Crafting beautiful, performant web experiences with modern technologies.
                            Passionate about creating user-centric solutions that make a difference.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] border border-white/10"
                            >
                                {/* Wip-Wap Shimmer Effect */}
                                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                
                                <span className="relative z-10 flex items-center gap-2">
                                    VIEW PROJECTS
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 font-bold overflow-hidden"
                            >
                                {/* Subtle Glow/Shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                
                                <span className="relative z-10">CONTACT ME</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />

                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm bg-white/5 p-2">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 relative border border-white/5">
                                <img
                                    className="w-full h-full object-cover object-[center_20%]"
                                    src="./DSC05941.jpg"
                                    alt="hero image"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
