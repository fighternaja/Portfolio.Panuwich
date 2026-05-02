import { Code, Code2, Layout, Palette, Sparkles, Server } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
    { name: "Next.js", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "React", icon: Layout, color: "from-cyan-500/20 to-blue-400/20" },
    { name: "JavaScript", icon: Sparkles, color: "from-yellow-500/20 to-orange-500/20" },
    { name: "Tailwind CSS", icon: Palette, color: "from-teal-500/20 to-green-500/20" },
    { name: "Laravel", icon: Server, color: "from-red-500/20 to-pink-500/20" },
    { name: "Python", icon: Server, color: "from-yellow-500/20 to-orange-500/20" },
    { name: "PHP", icon: Server, color: "from-purple-500/20 to-pink-500/20" },
    { name: "MYSQL", icon: Server, color: "from-blue-600/20 to-indigo-500/20" },

];
export function About() {
    return (
        <section id="about" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                        <span className="text-white">About</span> <span className="text-zinc-500">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full" />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card via-card to-accent/20 border border-border shadow-2xl backdrop-blur-sm">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-2xl blur-xl opacity-50" />
                            <div className="relative">
                                <p className="mb-6 leading-relaxed text-white">

                                </p>
                                <p className="mb-6 leading-relaxed text-white">

                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative flex flex-col items-center p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors duration-300 hover:-translate-y-2"
                                >
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300 mb-3`}>
                                        <skill.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


