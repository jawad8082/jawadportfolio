import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  SendIcon 
} from 'lucide-react';

const ContactForm = () => {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
       onSubmit={handleSubmit} 
       className="space-y-6 w-full max-w-lg mx-auto md:mx-0" // Added max-w-lg & mx-auto
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full" // Ensure divs take full width
        >
          <label className={`block text-sm font-medium mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode 
                ? 'bg-slate-800/80 border-slate-700 text-white'
                : 'bg-white border-gray-200 text-gray-900'
            } border focus:ring-2 focus:ring-violet-400 transition-all`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full" // Ensure divs take full width
        >
          <label className={`block text-sm font-medium mb-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg ${
              darkMode 
                ? 'bg-slate-800/80 border-slate-700 text-white'
                : 'bg-white border-gray-200 text-gray-900'
            } border focus:ring-2 focus:ring-violet-400 transition-all`}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className={`block text-sm font-medium mb-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode 
              ? 'bg-slate-800/80 border-slate-700 text-white'
              : 'bg-white border-gray-200 text-gray-900'
          } border focus:ring-2 focus:ring-violet-400 transition-all`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label className={`block text-sm font-medium mb-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode 
              ? 'bg-slate-800/80 border-slate-700 text-white'
              : 'bg-white border-gray-200 text-gray-900'
          } border focus:ring-2 focus:ring-violet-400 transition-all`}
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500
                text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
                transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="animate-spin">⌛</span>
        ) : (
          <>
            <SendIcon size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

const ContactInfo = () => {
  const { darkMode } = useDarkMode();
  
  const contactDetails = [
    {
      icon: <MailIcon size={24} />,
      title: "Email",
      value: "Jawadalisoomro46@gmail.com",
      link: "mailto:Jawadalisoomro46@gmail.com"
    },
    {
      icon: <MapPinIcon size={24} />,
      title: "Location",
      value: "Islamabad,Pakistan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon size={24} />,
      link: "https://linkedin.com/in/dev-jawad"
    },
    {
      icon: <GithubIcon size={24} />,
      link: "https://github.com/jawad8082"
    },
    {
      icon: <TwitterIcon size={24} />,
      link: "https://twitter.com/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 w-full max-w-lg mx-auto md:mx-0" // Added max-w-lg & mx-auto
    >
      {contactDetails.map((detail, index) => (
        <motion.a
          key={index}
          href={detail.link}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`flex items-center gap-4 p-4 rounded-lg ${
            darkMode 
              ? 'bg-slate-800/50 hover:bg-slate-800/80'
              : 'bg-white/50 hover:bg-white/80'
          } backdrop-blur-sm transition-all`}
        >
          <span className={`p-3 rounded-lg ${
            darkMode ? 'bg-violet-500/20' : 'bg-violet-100'
          }`}>
            {detail.icon}
          </span>
          <div>
            <h3 className={`text-sm font-medium ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {detail.title}
            </h3>
            <p className={`text-base font-medium ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {detail.value}
            </p>
          </div>
        </motion.a>
      ))}

      <div className="flex gap-4 pt-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-lg ${
              darkMode 
                ? 'bg-slate-800/50 hover:bg-slate-800/80'
                : 'bg-white/50 hover:bg-white/80'
            } backdrop-blur-sm transition-all`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <PageLayout>
      <Navbar />
      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <MailIcon size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Get in Touch</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's <GradientText>Connect</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;