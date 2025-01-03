// import React from 'react';
// import { motion } from 'framer-motion';
// import { useDarkMode } from './common/DarkModeContext';
// import { PageLayout } from './common/PageLayout';
// import { GradientText } from './common/StyledComponents';
// import Navbar from './Navbar';
// import { Code, Brain, Layers, Database, Server, Globe, Shield, Cpu } from 'lucide-react';

// const skillCategories = [
//   {
//     title: "Frontend Development",
//     icon: <Code size={24} />,
//     skills: [
//       { name: "React.js", level: 90 },
//       { name: "TypeScript", level: 80 },
//       { name: "Bootstrap", level: 85 },
//       { name: "Tailwind CSS", level: 95 },
//       { name: "HTML5/CSS3", level: 90 }
//     ]
//   },
//   {
//     title: "Backend Development",
//     icon: <Server size={24} />,
//     skills: [
//       { name: "Node.js", level: 85 },
//       { name: "Express.js", level: 80 },
//       { name: "RESTful APIs", level: 85 },
//       {name: "Prisma ORM", level: 80 },
//     ]
//   },
//   {
//     title: "Database",
//     icon: <Database size={24} />,
//     skills: [
//       { name: "MongoDB", level: 85 },
//       { name: "PostgreSQL", level: 80 },
//       { name: "MySQL", level: 75 },
//     ]
//   },
//   {
//     title: "DevOps & Tools",
//     icon: <Cpu size={24} />,
//     skills: [
//       { name: "Git", level: 90 },
//       { name: "Docker", level: 80 },
//       { name: "CI/CD", level: 85 },

//     ]
//   }
// ];

// const SkillCard = ({ category, index }) => {
//   const { darkMode } = useDarkMode();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className={`relative p-6 rounded-2xl backdrop-blur-sm ${
//         darkMode
//           ? 'bg-slate-800/80 border border-slate-700'
//           : 'bg-white/80 border border-gray-200'
//       }`}
//     >
//       <div className="flex items-center gap-3 mb-6">
//         <span className={`p-2 rounded-lg ${
//           darkMode ? 'bg-violet-500/20' : 'bg-violet-100'
//         }`}>
//           {React.cloneElement(category.icon, {
//             className: 'text-violet-500'
//           })}
//         </span>
//         <h3 className={`text-xl font-bold ${
//           darkMode ? 'text-white' : 'text-gray-900'
//         }`}>
//           {category.title}
//         </h3>
//       </div>

//       <div className="space-y-4">
//         {category.skills.map((skill, i) => (
//           <div key={i}>
//             <div className="flex justify-between mb-1">
//               <span className={`text-sm font-medium ${
//                 darkMode ? 'text-gray-300' : 'text-gray-700'
//               }`}>
//                 {skill.name}
//               </span>
//               <span className={`text-sm font-medium ${
//                 darkMode ? 'text-gray-400' : 'text-gray-500'
//               }`}>
//                 {skill.level}%
//               </span>
//             </div>
//             <div className={`h-2 rounded-full ${
//               darkMode ? 'bg-slate-700' : 'bg-gray-200'
//             }`}>
//               <motion.div
//                 initial={{ width: 0 }}
//                 whileInView={{ width: `${skill.level}%` }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   const { darkMode } = useDarkMode();

//   return (
//     <PageLayout>
//       <Navbar />
//       <div className="relative container mx-auto px-6 py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
//             <Brain size={16} className="text-violet-400" />
//             <span className="text-violet-300 font-medium">Professional Skills</span>
//           </div>

//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
//             darkMode ? 'text-white' : 'text-gray-900'
//           }`}>
//             Technical <GradientText>Expertise</GradientText>
//           </h2>

//           <p className={`text-lg max-w-2xl mx-auto ${
//             darkMode ? 'text-gray-300' : 'text-gray-600'
//           }`}>
//             Showcasing my proficiency in various technologies and tools that I use to create exceptional digital solutions
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {skillCategories.map((category, index) => (
//             <SkillCard
//               key={index}
//               category={category}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </PageLayout>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./common/DarkModeContext";
import { PageLayout } from "./common/PageLayout";
import { GradientText } from "./common/StyledComponents";
import Navbar from "./Navbar";
import {
  Code,
  Brain,
  Database,
  Server,
  Globe,
  Shield,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code size={24} />,
    description:
      "Specializing in modern web applications with React.js and Next.js",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Material UI", icon: "🎯" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    description:
      "Building robust server-side solutions with Node.js and Python",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "EX" },
      { name: "RESTful APIs", icon: "🔌" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database size={24} />,
    description: "Designing efficient database solutions with SQL and NoSQL",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL Server", icon: "📊" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Globe size={24} />,
    description: "Deploying and managing applications on AWS infrastructure",
    skills: [
      { name: "Git Hub", icon: "😺" },
      { name: "Git", icon: "🐱" },
      { name: "Docker", icon: "🐳" },
    ],
  },
];

const statsData = [
  { value: "50+", label: "Projects", icon: "🎯" },
  { value: "3+", label: "Years", icon: "⏳" },
  { value: "20+", label: "Technologies", icon: "💻" },
  { value: "10+", label: "Cloud Services", icon: "☁️" },
];

const SkillCard = ({ category, index }) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu hover:translate-y-[-4px] transition-all duration-300 ${
        darkMode
          ? "bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60"
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
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`p-3 rounded-2xl transition-colors duration-200 ${
              darkMode
                ? "bg-violet-500/20 text-violet-400"
                : "bg-violet-100 text-violet-600"
            }`}
          >
            {React.cloneElement(category.icon, {
              className: "w-6 h-6",
            })}
          </span>
          <h3
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {category.title}
          </h3>
        </div>

        <p
          className={`mb-6 text-sm leading-relaxed ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {category.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-2xl text-sm flex items-center gap-2 transition-colors duration-200 ${
                darkMode
                  ? "bg-slate-900/80 border border-slate-700/50 text-gray-300 hover:bg-slate-900/90"
                  : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{skill.icon}</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ stat }) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-3xl backdrop-blur-md transition-all duration-300 ${
        darkMode
          ? "bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60"
          : "bg-white/90 border border-gray-200/50 hover:bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <span className="text-4xl mb-3">{stat.icon}</span>
        <h4
          className={`text-3xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {stat.value}
        </h4>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
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
              <Brain
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span
                className={darkMode ? "text-violet-300" : "text-violet-600"}
              >
                Technical Skills
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Technical <GradientText>Expertise</GradientText>
            </h2>

            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Showcasing my proficiency in various technologies and tools that I
              use to create exceptional digital solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3
              className={`text-2xl font-bold text-center mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Milestones
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;