import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { RocketIcon, GithubIcon, ExternalLinkIcon, FolderIcon } from 'lucide-react';
import artinvver from "../assets/ProjectImages/Artinvver.png"
import nisarfoods from "../assets/ProjectImages/nisarfoods.png"
import linahs from "../assets/ProjectImages/linahs.png"

const projects = [
  {
    title: "Car Management System",
    description: "A full-stack platform with real-time Car management, and admin dashboard. Features include vehicle tracking, maintenance scheduling, rental management, and comprehensive reporting tools.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://artinvver.com/",
    image: artinvver
  },
  {
    title: "Nisar Foods",
    description: "Developed a comprehensive e-commerce platform for food distribution with integrated product management, online ordering system, and automated inventory tracking. Features include secure payment processing, custom product catalogs, and real-time order status updates.",
    technologies: ["Wordpress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/jawad8082",
    liveUrl: "https://nisarfoods.com",
    image: nisarfoods
  },
  {
    title: "Linahs (Ongoing Project)",
    description: "Full-featured Learning Management System for universities with comprehensive course management, student tracking, and interactive learning tools. Includes virtual classrooms, assignment submission system, and integrated discussion forums.",
    technologies: ["Wordpress", "PHP", "MySQL"],
    githubUrl: "https://github.com/8082",
    liveUrl: "https://linahs.edu",
    image: linahs
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
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-sm ${
        darkMode
          ? 'bg-slate-800/80 border border-slate-700'
          : 'bg-white/80 border border-gray-200'
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${
          darkMode ? 'from-transparent to-slate-800/90' : 'from-transparent to-white/90'
        }`} />
      </div>

      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>

        <p className={`mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode
                  ? 'bg-violet-500/20 text-violet-300'
                  : 'bg-violet-100 text-violet-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode
                ? 'bg-slate-700 text-white hover:bg-slate-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
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
      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <RocketIcon size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Featured Projects</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Recent <GradientText>Projects</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing some of my best work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;