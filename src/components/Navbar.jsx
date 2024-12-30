// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { Link } from 'react-scroll';

const NavLink = ({ to, children }) => (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
            to={to}
            smooth={true}
            duration={500}
            offset={-70}
            className="relative text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
            transition-colors duration-300 py-2 px-4 text-sm font-medium group cursor-pointer"
        >
            {children}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 scale-x-0 
            group-hover:scale-x-100 transition-transform duration-300" />
        </Link>
    </motion.li>
);

const DarkModeToggle = ({ darkMode, onToggle }) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className="rounded-full bg-gray-200 dark:bg-gray-800 p-2.5 transition-colors duration-300 
        hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
        <motion.div animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.5 }}>
            {darkMode ? (
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </motion.div>
    </motion.button>
);

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: "hero", label: "Home" },
        { to: "experience", label: "Experience" },
        { to: "skills", label: "Skills" },
        { to: "education", label: "Education" },
        { to: "projects", label: "Projects" },
        // { to: "blogs", label: "Blogs" },
        { to: "contact", label: "Contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled ? 'py-2' : 'py-4'
            }`}
        >
            <div className={`mx-4 md:mx-8 lg:mx-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-full 
            shadow-lg transition-all duration-300 ${scrolled ? 'shadow-indigo-500/10' : ''}`}>
                <div className="container mx-auto px-4 md:px-6 py-3">
                    <div className="flex items-center justify-between">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/"
                            className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 
                            bg-clip-text text-transparent"
                        >
                            Jawad
                        </motion.a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-indigo-500 
                            dark:hover:text-indigo-400 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>

                        <div className={`absolute top-full left-0 right-0 md:relative md:top-0 md:block 
                        md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <motion.ul
                                initial={false}
                                animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 
                                bg-white/95 dark:bg-gray-900/95 md:bg-transparent md:dark:bg-transparent 
                                rounded-2xl mt-2 md:mt-0 p-4 md:p-0 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}
                            >
                                {navLinks.map(link => (
                                    <NavLink key={link.to} to={link.to}>
                                        {link.label}
                                    </NavLink>
                                ))}
                            </motion.ul>
                        </div>

                        <div className=" md:block">
                            <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;