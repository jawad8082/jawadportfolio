import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { 
  MailIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon,
  SendIcon,
  ArrowRightIcon
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu transition-all duration-300 ${
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
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
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                } border focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all`}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
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
                className={`w-full px-4 py-3 rounded-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                } border focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all`}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div>
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
              className={`w-full px-4 py-3 rounded-xl ${
                darkMode 
                  ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
              } border focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all`}
              placeholder="Project Discussion"
            />
          </div>

          {/* Message Input */}
          <div>
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
              className={`w-full px-4 py-3 rounded-xl ${
                darkMode 
                  ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
              } border focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all`}
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500
                    text-white font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40
                    transition-all duration-300 flex items-center justify-center gap-2 
                    disabled:opacity-50 disabled:cursor-not-allowed`}
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
        </form>
      </div>
    </motion.div>
  );
};

const ContactInfo = () => {
  const { darkMode } = useDarkMode();
  
  const contactDetails = [
    {
      icon: <MailIcon size={24} className="text-violet-500" />,
      title: "Email",
      value: "Jawadalisoomro46@gmail.com",
      link: "mailto:Jawadalisoomro46@gmail.com"
    },
    {
      icon: <MapPinIcon size={24} className="text-violet-500" />,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon size={24} />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/dev-jawad"
    },
    {
      icon: <GithubIcon size={24} />,
      name: "GitHub",
      link: "https://github.com/jawad8082"
    },
    {
      icon: <TwitterIcon size={24} />,
      name: "Twitter",
      link: "https://twitter.com/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu transition-all duration-300 ${
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

      <div className="relative z-10 space-y-8">
        {contactDetails.map((detail, index) => (
          <motion.a
            key={index}
            href={detail.link}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center gap-4 p-4 rounded-xl ${
              darkMode 
                ? 'bg-slate-700/50 hover:bg-slate-700/80'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-all group/item`}
          >
            <span className={`p-3 rounded-xl ${
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
              <p className={`text-base font-medium flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {detail.value}
                <ArrowRightIcon size={16} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
              </p>
            </div>
          </motion.a>
        ))}

        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Connect With Me
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl ${
                  darkMode 
                    ? 'bg-slate-700/50 hover:bg-slate-700/80 text-white hover:text-violet-400'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-violet-600'
                } transition-all`}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
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
            {/* Header Section */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm mb-8 ${
              darkMode
                ? "bg-slate-800/40 border border-slate-700/50"
                : "bg-white/80 border border-gray-200/50 shadow-lg"
            }`}>
              <MailIcon
                size={20}
                className={darkMode ? "text-violet-400" : "text-violet-600"}
              />
              <span className={darkMode ? "text-violet-300" : "text-violet-600"}>
                Get in Touch
              </span>
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>

            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Let's{" "}
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
                Connect
              </GradientText>
            </h2>

            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu hover:translate-y-[-4px] transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/90 border border-slate-700/50 shadow-lg shadow-violet-500/5"
                  : "bg-white/90 border border-gray-200/50 hover:bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode
                  ? "bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-transparent"
                  : "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-transparent"
              }`} />

              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className={`group relative p-8 rounded-3xl backdrop-blur-md transform-gpu hover:translate-y-[-4px] transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/90 border border-slate-700/50 shadow-lg shadow-violet-500/5"
                  : "bg-white/90 border border-gray-200/50 hover:bg-white shadow-lg hover:shadow-xl"
              }`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  darkMode
                    ? "bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-transparent"
                    : "bg-gradient-to-br from-violet-50 via-fuchsia-50 to-transparent"
                }`} />

                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    Contact Information
                  </h3>
                  <ContactInfo />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;