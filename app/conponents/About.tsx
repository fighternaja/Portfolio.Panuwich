import { Code, Code2, Layout, Palette, Sparkles, Server } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
    { name: "Html", icon: Code, color: "from-red-500/20 to-pink-500/20" },
    { name: "CSS", icon: Palette, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "JavaScript", icon: Code2, color: "from-yellow-500/20 to-orange-500/20" },
    { name: "TypeScript", icon: Code2, color: "from-yellow-500/20 to-orange-500/20" },
    { name: "Bootstrap", icon: Palette, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Next.js", icon: Layout, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "React", icon: Layout, color: "from-cyan-500/20 to-blue-400/20" },
    { name: "Tailwind CSS", icon: Palette, color: "from-teal-500/20 to-green-500/20" },
    { name: "Laravel", icon: Layout, color: "from-red-500/20 to-pink-500/20" },
    { name: "Python", icon: Code2, color: "from-yellow-500/20 to-orange-500/20" },
    { name: "PHP", icon: Code2, color: "from-purple-500/20 to-pink-500/20" },
    { name: "MYSQL", icon: Server, color: "from-blue-600/20 to-indigo-500/20" },
    { name: "Node.js", icon: Code2, color: "from-green-600/20 to-blue-500/20" },
    { name: "Github", icon: Server, color: "from-black/20 to-gray-900/20" },
    { name: "Git", icon: Server, color: "from-black/20 to-gray-900/20" },
    { name: "Golang", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Flutter", icon: Layout, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Dart", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
    { name: "Java", icon: Code2, color: "from-blue-500/20 to-cyan-500/20" },
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
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
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
                                    Hello I'm Panuwich Thammawong, I'm a Programmer and a Backend Developer.
                                    I am currently a student in Rajabhat ChiangMai University. Faculty of Informatics.
                                </p>
                                <p className="mb-6 leading-relaxed text-white">
                                    I am a student who is interested in programming, web development.
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
                        <h3 className="mb-8 text-white font-bold text-xl">Skills & Technologies</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="group relative"
                                    >
                                        {/* Glow effect */}
                                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                        {/* Content */}
                                        <div className="relative p-4 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/10 shadow-lg group-hover:border-white/30 h-full transition-all duration-300 overflow-hidden">
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                            
                                            <div className="flex items-center gap-3 relative z-10">
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="font-medium text-white group-hover:text-white transition-colors">{skill.name}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


