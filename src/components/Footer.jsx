import React from 'react';
import { useDarkMode } from './common/DarkModeContext';
import { 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon, 
  MailIcon, 
  MapPinIcon 
} from 'lucide-react';

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-dark-primary' : 'bg-gray-100'}`} >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Contact Information
            </h3>
            <ul className="space-y-2 text-center">
              <li className="flex items-center gap-2">
                <MailIcon size={18} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Jawadalisoomro46@gmail.com</span>
              </li>
              <li className="flex justify-center items-center gap-2">
                <MapPinIcon size={18} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Follow Me
            </h3>
            <div className="flex gap-4 justify-center">
              <a href="https://linkedin.com/in/dev-jawad" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg dark-mode-bg dark-mode-hover`}>
                <LinkedinIcon size={24} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
              </a>
              <a href="https://github.com/jawad8082" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg dark-mode-bg dark-mode-hover`}>
                <GithubIcon size={24} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
              </a>
              <a href="https://twitter.com/jawad" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg dark-mode-bg dark-mode-hover`}>
                <TwitterIcon size={24} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {new Date().getFullYear()} Jawad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
