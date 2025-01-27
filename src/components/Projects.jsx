import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./common/DarkModeContext";
import { PageLayout } from "./common/PageLayout";
import { GradientText } from "./common/StyledComponents";
import Navbar from "./Navbar";
import {
  RocketIcon,
  GithubIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "lucide-react";
import artinvver from "../assets/ProjectImages/Artinvver.png";
import nisarfoods from "../assets/ProjectImages/nisarfoods.png";
import linahs from "../assets/ProjectImages/linahs.png";
import SupportFoundation from "../assets/ProjectImages/supportFoundation.png";

const projects = [
  {
    title: "Car Management System",
    description:
      "A full-stack platform with real-time Car management, and admin dashboard. Features include vehicle tracking, maintenance scheduling, rental management, and comprehensive reporting tools.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://artinvver.com/",
    image: artinvver,
    features: [
      "Real-time vehicle tracking system",
      "Comprehensive admin dashboard",
      "Maintenance scheduling",
      "Advanced reporting tools",
    ],
  },
  {
    title: "Nisar Foods",
    description:
      "Developed a comprehensive e-commerce platform for food distribution with integrated product management, online ordering system, and automated inventory tracking.",
    technologies: ["Wordpress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://nisarfoods.com",
    image: nisarfoods,
    features: [
      "Secure payment processing",
      "Custom product catalogs",
      "Real-time order status updates",
      "Automated inventory tracking",
    ],
  },
  {
    title: "Linahs (Ongoing Project)",
    description:
      "Full-featured Learning Management System for universities with comprehensive course management, student tracking, and interactive learning tools.",
    technologies: ["Wordpress", "PHP", "MySQL"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://linahs.edu",
    image: linahs,
    features: [
      "Virtual classrooms integration",
      "Assignment submission system",
      "Integrated discussion forums",
      "Student progress tracking",
    ],
  },
  {
    title: "Support Foundation (NGO)",
    description:
      "A dedicated platform to empower women through skill development, mentorship programs, and access to resources for self-reliance and growth.",
    technologies: ["Wordpress", "Themes", "Plugins", "SQL"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://supportfoundation.org.pk/",
    image: SupportFoundation,
    features: [
      "Skill development workshops",
      "Personalized mentorship programs",
      "Resource sharing for entrepreneurship",
      "Progress tracking and support networks",
    ],
  }
];

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu hover:translate-y-[-4px] transition-all duration-300 ${
        darkMode
          ? "bg-slate-800/90 border border-slate-700/50 shadow-lg shadow-violet-500/5"
          : "bg-white/90 border border-gray-200/50 hover:bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-transparent"
            : "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-transparent"
        }`}
      />

      <div className="relative z-10">
        {/* Image Section */}
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              darkMode
                ? "from-transparent to-slate-800/20"
                : "from-transparent to-white/20"
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Features List */}
        {/* <ul className={`space-y-4 mb-8 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ArrowRightIcon
                size={18}
                className="flex-shrink-0 mt-1 text-violet-500"
              />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul> */}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                darkMode
                  ? "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                  : "bg-violet-100 text-violet-700 hover:bg-violet-200"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <GithubIcon size={18} />
            <span>Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-opacity duration-200"
          >
            <ExternalLinkIcon size={18} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { darkMode } = useDarkMode();

  return (
    <PageLayout>
      <Navbar />
      <div
        className={`relative min-h-screen ${
          darkMode ? "bg-slate-900" : "bg-gray-50"
        }`}
      >
        <div className="relative container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm mb-8 ${
                darkMode
                  ? "bg-slate-800/40 border border-slate-700/50"
                  : "bg-white/80 border border-gray-200/50 shadow-lg"
              }`}
            >
              <RocketIcon
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span
                className={darkMode ? "text-violet-300" : "text-violet-600"}
              >
                Featured Projects
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              My Recent{" "}
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
                Projects
              </GradientText>
            </h2>

            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Showcasing some of my best work and personal projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
