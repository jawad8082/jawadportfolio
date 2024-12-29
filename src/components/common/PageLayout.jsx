// src/components/common/PageLayout.jsx
import React from 'react';
import { useDarkMode } from './DarkModeContext';

export const PageLayout = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${
      darkMode
        ? 'bg-slate-900'
        : 'bg-white'
    }`}>
      {/* Abstract background patterns */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-[url('/noise.png')] opacity-5" />
        <div className="absolute top-0 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div> */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};