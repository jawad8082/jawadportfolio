import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { technologies } from '../utils/tech';
import Typewriter from 'typewriter-effect';
import resume from '../assets/Resume/resume.pdf';

const generateCircularPosition = (index, total, radius) => {
  const angle = (index / total) * 2 * Math.PI;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius
  };
};

const rotatePositions = (total, radius, offset = 0) => {
  return Array(total).fill(0).map((_, index) => {
    const angle = ((index / total) * 2 * Math.PI) + offset;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  });
};

const Hero = () => {
  const { darkMode } = useDarkMode();
  const techContainerRef = useRef(null);
  const [techElements, setTechElements] = useState([]);
  const animationDuration = 8;
  const radius = 180;

  useEffect(() => {
    const initialPositions = rotatePositions(technologies.length, radius);
    setTechElements(technologies.map((tech, index) => ({
      ...tech,
      position: initialPositions[index],
      key: index
    })));
  }, []);

  useEffect(() => {
    if (techElements.length > 0) {
      let offset = 0;
      const interval = setInterval(() => {
        offset += Math.PI / 8;
        const newPositions = rotatePositions(technologies.length, radius, offset);

        setTechElements(prevTechElements =>
          prevTechElements.map((tech, index) => ({
            ...tech,
            position: newPositions[index]
          }))
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [techElements]);

  return (
    <PageLayout>
      <Navbar />
      <div className="relative container mx-auto px-6 pt-32 pb-24 md:pt-52 md:pb-40">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2 space-y-8 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mx-auto md:mx-0">
              <span className="text-violet-300 font-medium">Software Developer</span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Hello, I'm{' '}
              <GradientText>Jawad</GradientText>
              <Typewriter
                options={{
                  strings: ["Web Developer 😀", "Freelancer 👻", "Web Designer ✨"],
                  delay: 30,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className={`text-lg md:text-xl leading-relaxed max-w-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } mx-auto md:mx-0`}>
              A passionate software developer crafting exceptional digital experiences.
              Specializing in modern web applications that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500
                          text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
                          transition-all duration-300"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resume}
                download="Jawad's_Resume.pdf"
                className={`px-8 py-4 rounded-xl border font-medium transition-all duration-300 backdrop-blur-sm ${
                  darkMode
                    ? 'text-gray-300 border-gray-700 hover:border-violet-400 hover:text-violet-400'
                    : 'text-gray-600 border-gray-300 hover:border-violet-400 hover:text-violet-400'
                }`}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden md:flex md:w-1/2 justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96" ref={techContainerRef}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-300 blur-2xl opacity-50" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-300 animate-pulse" />
              <img
                src="/api/placeholder/500/500"
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover border-4 border-white/10
                         shadow-2xl shadow-black/50"
              />

              {techElements.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    x: tech.position?.x || 0,
                    y: tech.position?.y || 0,
                    opacity: 0 
                  }}
                  animate={{
                    x: tech.position?.x || 0,
                    y: tech.position?.y || 0,
                    opacity: 1
                  }}
                  transition={{ 
                    duration: animationDuration,
                    ease: "linear"
                  }}
                  className="absolute left-1/2 top-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 -ml-4 -mt-4 sm:-ml-5 sm:-mt-5 md:-ml-6 md:-mt-6 flex items-center justify-center 
                           bg-white/10 backdrop-blur-sm rounded-full shadow-lg transform hover:scale-110 
                           transition-transform"
                  style={{
                    transform: `translate(${tech.position?.x}px, ${tech.position?.y}px)`
                  }}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white">
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Hero;