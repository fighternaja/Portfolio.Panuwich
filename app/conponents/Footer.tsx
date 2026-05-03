import { motion } from "framer-motion";
import { Camera, Code, User, Mail, MapPin, Phone } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const Facebook = ({ className }: { className?: string }) => (
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);



export function Footer() {
    return (
        <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="text-2xl font-bold text-white">
                            Panuwich Thammawong<span className="text-primary"> .</span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed max-w-xs">
                            Creating modern web experiences with passion and precision.
                            Specializing in full-stack development and user-centric design.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Code, href: "https://github.com/fighternaja/Portfolio.Panuwich" },
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "https://www.instagram.com/_fightter.panu/?hl=en" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-primary hover:border-primary/50 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Wip-Wap Shimmer Effect */}
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                                    <social.icon className="w-5 h-5 relative z-10" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="">
                        <h3 className="text-white font-bold mb-8 text-lg"> Links </h3>
                        <ul className="flex flex-col gap-4">
                            {["Home", "About", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-8 text-lg">Contact</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-primary/60" />
                                <span>fighterkab123@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-primary/60" />
                                <span>+66 93 272 1639</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-primary/60 mt-1" />
                                <span>Chiang Mai, Thailand</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        </footer>
    );
}