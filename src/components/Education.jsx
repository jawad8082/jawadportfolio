import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    institution: "Iqra University",
    degree: "Bachelor of Software Engineering",
    duration: "20220 - 2024",
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
      className={`relative p-6 rounded-2xl backdrop-blur-sm ${
        darkMode
          ? 'bg-slate-800/80 border border-slate-700'
          : 'bg-white/80 border border-gray-200'
      }`}
    >
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {education.degree}
        </h3>
        <h4 className="text-lg font-semibold">
          <GradientText>{education.institution}</GradientText>
        </h4>
      </div>

      <div className={`flex gap-4 mb-6 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{education.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{education.location}</span>
        </div>
      </div>

      <div className="mb-6">
        <h5 className={`flex items-center gap-2 text-lg font-semibold mb-3 ${
          darkMode ? 'text-gray-200' : 'text-gray-800'
        }`}>
          <Award size={18} />
          Achievements
        </h5>
        <ul className={`space-y-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {education.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-violet-500">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className={`flex items-center gap-2 text-lg font-semibold mb-3 ${
          darkMode ? 'text-gray-200' : 'text-gray-800'
        }`}>
          <BookOpen size={18} />
          Key Courses
        </h5>
        <div className="flex flex-wrap gap-2">
          {education.courses.map((course, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode
                  ? 'bg-violet-500/20 text-violet-300'
                  : 'bg-violet-100 text-violet-700'
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
      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <GraduationCap size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Education Journey</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Academic <GradientText>Background</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My educational journey and academic achievements that have shaped my professional expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;