import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./common/DarkModeContext";
import { PageLayout } from "./common/PageLayout";
import { GradientText } from "./common/StyledComponents";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";
import resume from "../assets/Resume/resume.pdf";
import { Code, Github, Twitter, Linkedin } from "lucide-react";
import profile from "../assets/ProjectImages/profile.jpeg";

const Hero = () => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/dev-jawad",
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com/jawad8082",
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      link: "https://twitter.com/",
    },
  ];

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
              {/* Social Media Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex p-3 rounded-xl items-center ${
                      darkMode
                        ? "bg-slate-700/50 hover:bg-slate-700/80 text-white hover:text-violet-400"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-violet-600"
                    } transition-all`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className={`w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 ${
                  darkMode ? "border-violet-500" : "border-violet-400"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profile}
                  alt="Jawad's Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div
                className={`absolute inset-0 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-tr from-violet-500/20 to-transparent"
                    : "bg-gradient-to-tr from-violet-400/20 to-transparent"
                }`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Hero;