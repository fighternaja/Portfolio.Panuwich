"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Experience", id: "experience" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-transparent backdrop-blur-md border-b border-white/5 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 relative">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToSection("home")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 font-bold text-white text-xl"
                    >
                        <span>Portfolio</span>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center gap-25 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/80 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                    </div>



                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isMobileMenuOpen ? "auto" : 0,
                    opacity: isMobileMenuOpen ? 1 : 0,
                }}
                className="md:hidden overflow-hidden bg-black/40 backdrop-blur-lg border-b border-white/10"
            >
                <div className="container mx-auto px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="block w-full text-center px-4 py-3 rounded-xl text-white hover:text-primary hover:bg-white/5 transition-all duration-200 font-medium"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
