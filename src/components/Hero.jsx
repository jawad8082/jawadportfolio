import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./common/DarkModeContext";
import { PageLayout } from "./common/PageLayout";
import { GradientText } from "./common/StyledComponents";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import resume from "../assets/Resume/resume.pdf";
import { Code } from "lucide-react";
import profile from "../assets/ProjectImages/profile.jpeg";

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
    <PageLayout>
      <Navbar />
      <div className="relative container mx-auto px-6 pt-32 md:pt-52">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2 space-y-8 text-center md:text-left"
          >
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm ${
                darkMode
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/80 border border-gray-200/50 shadow-lg"
              }`}
            >
              <Code
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span
                className={darkMode ? "text-violet-300" : "text-violet-600"}
              >
                Software Engineer
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h1
              className={`text-3xl md:text-6xl lg:text-7xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Hello, I'm <GradientText>Jawad</GradientText>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Freelancer", "Web Designer"],
                  delay: 30,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p
              className={`text-lg md:text-xl leading-relaxed max-w-xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } mx-auto md:mx-0`}
            >
              A passionate software developer crafting exceptional digital
              experiences. Specializing in modern web applications that make a
              difference.
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
                    ? "text-gray-300 border-gray-700 hover:border-violet-400 hover:text-violet-400"
                    : "text-gray-600 border-gray-300 hover:border-violet-400 hover:text-violet-400"
                }`}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          
        </div>
      </div>
    </PageLayout>
  );
};

export default Hero;
