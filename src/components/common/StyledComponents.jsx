// src/components/common/StyledComponents.jsx
import { motion } from 'framer-motion';

export const GradientText = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
    {children}
  </span>
);

export const Card = ({ darkMode, children }) => (
  <div className={`p-6 rounded-2xl backdrop-blur-sm ${
    darkMode
      ? 'bg-slate-800/80 border border-slate-700'
      : 'bg-white/80 border border-gray-200'
  }`}>
    {children}
  </div>
);

export const Badge = ({ darkMode, children }) => (
  <span className={`px-3 py-1 rounded-full text-sm ${
    darkMode
      ? 'bg-violet-500/20 text-violet-300'
      : 'bg-violet-100 text-violet-700'
  }`}>
    {children}
  </span>
);