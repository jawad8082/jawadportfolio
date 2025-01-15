import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./common/DarkModeContext";
import { PageLayout } from "./common/PageLayout";
import { GradientText } from "./common/StyledComponents";
import Navbar from "./Navbar";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "lucide-react";

const experiences = [
  {
    company: "Wigatech Solutions",
    position: "Frontend Developer",
    duration: "July 2023 - Sep 2023",
    location: "Karachi, Sindh",
    description: [
      "Optimize WordPress websites for maximum speed, scalability, and cross-browser compatibility",
      "Collaborate with UX/UI designers to transform design wireframes into high-quality WordPress themes and plugins."
    ],
    skills: ["WordPress","Themes","Plugins","Woo Commerce"],
  },
  {
    company: "Sky Byte Solutions",
    position: "Frontend Developer",
    duration: "Sep 2023 - Aug 2024",
    location: "Karachi, Sindh",
    description: [
      "Develop responsive, scalable, and maintainable web applications.",
      "Collaborate with UX/UI designers to translate design wireframes into high- quality code.",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "WordPress"],
  },
  {
    company: "Fiverr",
    position: "Fullstack Developer",
    duration: "Jan 2023 - Present",
    location: "Remote",
    description: [
      "Develop and maintain full-stack web applications",
      "Implemented responsive designs and user interfaces",
      "Managed database architecture and API integrations for web applications",
      "Worked closely with designers and product managers",
    ],
    skills: ["MERN", "REST APIs"],
  },
  {
    company: "IRC",
    position: "Data Entry Operator",
    duration: "Sep 2023 - Dec 2023",
    location: "Karachi, Sindh",
    description: [
      "Managed and maintained accurate data entry in organizational databases",
      "Processed large volumes of data with high accuracy and attention to detail",
      "Generated regular reports and performed data quality checks",
    ],
    skills: ["Data Entry", "Database Management", "Data Verification"],
  },
];

const ExperienceCard = ({ experience, index }) => {
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
        <div className="mb-8">
          <h3
            className={`text-2xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {experience.position}
          </h3>
          <h4 className="text-lg font-semibold">
            <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
              {experience.company}
            </GradientText>
          </h4>
        </div>

        <div
          className={`flex gap-6 mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <div className="flex items-center gap-2 px-3 py-1">
            <CalendarIcon size={16} className="text-violet-500" />
            <span className="text-sm font-medium">{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
            <MapPinIcon size={16} className="text-violet-500" />
            <span className="text-sm font-medium">{experience.location}</span>
          </div>
        </div>

        <ul
          className={`space-y-4 mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <ArrowRightIcon
                size={18}
                className="flex-shrink-0 mt-1 text-violet-500"
              />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                darkMode
                  ? "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                  : "bg-violet-100 text-violet-700 hover:bg-violet-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
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
              <BriefcaseIcon
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span
                className={darkMode ? "text-violet-300" : "text-violet-600"}
              >
                Career Journey
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Professional{" "}
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
                Experience
              </GradientText>
            </h2>

            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              A journey through my professional career, highlighting key
              achievements and technological expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;