import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './common/DarkModeContext';
import { PageLayout } from './common/PageLayout';
import { GradientText } from './common/StyledComponents';
import Navbar from './Navbar';
import { BookOpenIcon, ClockIcon, TagIcon } from 'lucide-react';

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices and patterns for building large-scale React applications that perform well and are maintainable.",
    date: "Dec 27, 2023",
    readTime: "8 min read",
    category: "React",
    image: "/path-to-image.jpg",
    link: "/blog/building-scalable-react-apps"
  },
  {
    title: "Modern Backend Development with Node.js",
    excerpt: "Explore advanced Node.js concepts and learn how to build robust backend services.",
    date: "Dec 20, 2023",
    readTime: "10 min read",
    category: "Node.js",
    image: "/path-to-image.jpg",
    link: "/blog/modern-backend-development"
  },
  {
    title: "DevOps Best Practices",
    excerpt: "A comprehensive guide to implementing DevOps practices in your development workflow.",
    date: "Dec 15, 2023",
    readTime: "12 min read",
    category: "DevOps",
    image: "/path-to-image.jpg",
    link: "/blog/devops-best-practices"
  }
];

const BlogCard = ({ post, index }) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-sm ${
        darkMode
          ? 'bg-slate-800/80 border border-slate-700'
          : 'bg-white/80 border border-gray-200'
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`flex items-center gap-2 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <ClockIcon size={14} />
            <span>{post.date}</span>
          </div>
          <div className={`flex items-center gap-2 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <TagIcon size={14} />
            <span>{post.category}</span>
          </div>
        </div>

        <h3 className={`text-xl font-bold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {post.title}
        </h3>

        <p className={`mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {post.excerpt}
        </p>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={post.link}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-medium"
        >
          Read More
          <svg 
            className="w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </motion.a>
      </div>
    </motion.article>
  );
};

const Blog = () => {
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
            <BookOpenIcon size={16} className="text-violet-400" />
            <span className="text-violet-300 font-medium">Latest Articles</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <GradientText>Blog</GradientText>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing my thoughts, experiences, and knowledge about software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;