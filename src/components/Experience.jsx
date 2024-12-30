import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { BriefcaseIcon, CalendarIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';

const experiences = [
  {
    company: "Wigatech Solutions",
    position: "Frontend Developer",
    duration: "July 2023 - Sep 2023",
    location: "Karachi, Sindh",
    description: [
      "Led development of cloud-native microservices architecture",
      "Improved system performance by 40% through optimization",
      "Mentored junior developers and conducted code reviews"
    ],
    skills: ["React", "Node.js", "Wordpress"]
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
      "Worked closely with designers and product managers"
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
  },
  {
    company: "IRC",
    position: "Data Entry Operator",
    duration: "Sep 2023 - Dec 2023",
    location: "Karachi, Sindh",
    description: [
      "Managed and maintained accurate data entry in organizational databases",
      "Processed large volumes of data with high accuracy and attention to detail",
      "Generated regular reports and performed data quality checks"
    ],
    skills: ["Data Entry", "MS Office", "Database Management", "Data Verification"]
  }
];

const ExperienceCard = ({ experience, index }) => {
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
          {experience.position}
        </h3>
        <h4 className="text-lg font-semibold">
          <GradientText>{experience.company}</GradientText>
        </h4>
      </div>

      <div className={`flex gap-4 mb-4 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        <div className="flex items-center gap-2">
          <CalendarIcon size={16} />
          <span>{experience.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon size={16} />
          <span>{experience.location}</span>
        </div>
      </div>

      <ul className={`space-y-3 mb-6 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {experience.description.map((item, i) => (
          <li key={i} className="flex gap-3">
            <ArrowRightIcon size={18} className="flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-sm ${
              darkMode
                ? 'bg-violet-500/20 text-violet-300'
                : 'bg-violet-100 text-violet-700'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
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
            <BriefcaseIcon size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Career Journey</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional{' '}
            <GradientText>Experience</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A journey through my professional career, highlighting key achievements and technological expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;