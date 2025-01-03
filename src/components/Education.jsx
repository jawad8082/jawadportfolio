import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import {
  GraduationCap,
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from 'lucide-react';

const educationData = [
  {
    institution: "Iqra University",
    degree: "Bachelor of Software Engineering",
    duration: "2020 - 2024",
    location: "Karachi, Sindh",
    achievements: [
      "Developed a full-stack web application as a final year project using MERN stack",
      "Completed a successful internship at a leading software house in Karachi",
      "Collaborated on a team project to design and deploy a microservices-based application",
      "GPA: 3.01/4.0"
    ],
    courses: ["Web Development", "Database Management", "Software Design and Architecture"]
  },
  {
    institution: "Sindh Board of Technical Education",
    degree: "Diploma in Information Technology",
    duration: "Sep 2017 – Sep 2018",
    location: "Shikarpur, Sindh",
    achievements: [
      "Gained hands-on experience in computer hardware and networking",
      "Developed a web application as part of the final project",
      "Achieved top marks in Database Management and Programming Fundamentals"
    ],
    courses: [
      "Computer Hardware and Networking",
      "Programming Fundamentals",
      "Database Management Systems",
      "Office Automation Tools"
    ]
  }
];

const EducationCard = ({ education, index }) => {
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
          <h3 className={`text-2xl font-bold mb-3 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            {education.degree}
          </h3>
          <h4 className="text-lg font-semibold">
            <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
              {education.institution}
            </GradientText>
          </h4>
        </div>

        <div className={`flex gap-6 mb-6 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}>
          <div className="flex items-center gap-2 px-3 py-1">
            <CalendarIcon size={16} className="text-violet-500" />
            <span className="text-sm font-medium">{education.duration}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
            <MapPinIcon size={16} className="text-violet-500" />
            <span className="text-sm font-medium">{education.location}</span>
          </div>
        </div>

        <div className="mb-8">
          <ul className={`space-y-4 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            {education.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 items-start">
                <ArrowRightIcon
                  size={18}
                  className="flex-shrink-0 mt-1 text-violet-500"
                />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, i) => (
            <span
              key={i}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                darkMode
                  ? "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                  : "bg-violet-100 text-violet-700 hover:bg-violet-200"
              }`}
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { darkMode } = useDarkMode();

  return (
    <PageLayout>
      <Navbar />
      <div className={`relative min-h-screen ${
        darkMode ? "bg-slate-900" : "bg-gray-50"
      }`}>
        <div className="relative container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm mb-8 ${
              darkMode
                ? "bg-slate-800/40 border border-slate-700/50"
                : "bg-white/80 border border-gray-200/50 shadow-lg"
            }`}>
              <GraduationCap
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span className={darkMode ? "text-violet-300" : "text-violet-600"}>
                Education Journey
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Academic{" "}
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
                Background
              </GradientText>
            </h2>

            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              My educational journey and academic achievements that have shaped my professional expertise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {educationData.map((education, index) => (
              <EducationCard
                key={index}
                education={education}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;