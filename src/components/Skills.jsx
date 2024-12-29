import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { Code, Brain, Layers, Database, Server, Globe, Shield, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 90 }
    ]
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 }
    ]
  }
];

const SkillCard = ({ category, index }) => {
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
      <div className="flex items-center gap-3 mb-6">
        <span className={`p-2 rounded-lg ${
          darkMode ? 'bg-violet-500/20' : 'bg-violet-100'
        }`}>
          {React.cloneElement(category.icon, {
            className: 'text-violet-500'
          })}
        </span>
        <h3 className={`text-xl font-bold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {skill.name}
              </span>
              <span className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {skill.level}%
              </span>
            </div>
            <div className={`h-2 rounded-full ${
              darkMode ? 'bg-slate-700' : 'bg-gray-200'
            }`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
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
            <Brain size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Professional Skills</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <GradientText>Expertise</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing my proficiency in various technologies and tools that I use to create exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;