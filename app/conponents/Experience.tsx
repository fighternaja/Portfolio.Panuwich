import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "experience",
        title: "Programmer",
        company: "Education in Chiang Mai University ",
        period: "3 Months",
        description: "Internship"
    },
    {
        type: "education",
        title: "Bachelor of Science in Computer Science",
        company: "Chiang Mai University",
        period: "2022 - 2026",
        description: " Study on Software Engineering, Data Structure and Algorithm, Database Management System, Information Security and Network Security"

    },
    {
        type: "education",
        title: "Senior High School",
        company: "ChiangMai Christain School",
        period: "2019 - 2021",
        description: "English - Chinese",

    },
    {
        type: "education",
        title: "Junior High School",
        company: "ChiangMai Christain School",
        period: "2017 - 2018",
        description: "Ordinary room",

    },
    {
        type: "education",
        title: "Junior High School",
        company: "Wachirawit",
        period: "2016 - 2017",
        description: "Ordinary room",
    },
    {
        type: "education",
        title: "Primary Education Grade 1-6",
        company: "Anubaan Chiang Mai School",
        period: "2009 - 2015",
        description: "Ordinary room",
    },
]
export function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                        <span className="text-white">Experience</span> <span className="text-zinc-500">& Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card Content */}
                            <div className="relative p-7 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden shadow-2xl">

                                {/* Wip-Wap Shimmer Effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/20">
                                        {exp.type === "experience" ? <Briefcase className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                    {exp.title}
                                </h3>
                                <p className="text-primary/80 font-semibold mb-4 text-sm tracking-wide">
                                    {exp.company}
                                </p>
                                <p className="text-zinc-400 text-sm leading-relaxed mt-auto font-medium">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}