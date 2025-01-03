import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { GradientText } from './common/StyledComponents';
import { 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon, 
  MailIcon, 
  MapPinIcon,
  HeartIcon
} from 'lucide-react';

const Footer = () => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    {
      icon: <LinkedinIcon size={20} />,
      href: "https://linkedin.com/in/dev-jawad",
      label: "LinkedIn"
    },
    {
      icon: <GithubIcon size={20} />,
      href: "https://github.com/jawad8082",
      label: "GitHub"
    },
    {
      icon: <TwitterIcon size={20} />,
      href: "https://twitter.com/jawad",
      label: "Twitter"
    }
  ];

  return (
    <footer className={`relative overflow-hidden ${
      darkMode ? "bg-slate-900" : "bg-gray-50"
    }`}>
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-6 pb-12">

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className={`flex items-center justify-center gap-2 md:text-xl text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            &copy; {new Date().getFullYear()}
            <GradientText className="font-medium">
              Jawad.
            </GradientText>{" "}
            All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;