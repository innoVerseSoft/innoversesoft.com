'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFiltering, setIsFiltering] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: "E-Commerce Platform", 
      category: "web", 
      description: "Modern React-based e-commerce solution",
      image: "https://picsum.photos/seed/ecommerce/800/600",
      tech: ["React", "Node.js", "MongoDB"]
    },
    { 
      id: 2, 
      title: "Fitness App", 
      category: "mobile", 
      description: "Cross-platform mobile application",
      image: "https://picsum.photos/seed/fitness/800/600",
      tech: ["React Native", "Firebase", "TypeScript"]
    },
    { 
      id: 3, 
      title: "AI Analytics Dashboard", 
      category: "AI", 
      description: "Machine learning-powered insights",
      image: "https://picsum.photos/seed/ai/800/600",
      tech: ["Python", "TensorFlow", "React"]
    },
    { 
      id: 4, 
      title: "Corporate Website", 
      category: "web", 
      description: "Professional business platform",
      image: "https://picsum.photos/seed/corporate/800/600",
      tech: ["Next.js", "Tailwind", "Framer Motion"]
    },
    { 
      id: 5, 
      title: "Delivery App", 
      category: "mobile", 
      description: "Real-time logistics solution",
      image: "https://picsum.photos/seed/delivery/800/600",
      tech: ["Flutter", "Google Maps", "Firebase"]
    },
    { 
      id: 6, 
      title: "Chatbot System", 
      category: "AI", 
      description: "Intelligent customer service automation",
      image: "https://picsum.photos/seed/chatbot/800/600",
      tech: ["OpenAI", "Node.js", "WebSocket"]
    }
  ];

  const handleFilterChange = (filter: string) => {
    setIsFiltering(true);
    setActiveFilter(filter);
    // Reset filtering state after animation
    setTimeout(() => setIsFiltering(false), 500);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white overflow-hidden z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of innovative projects that showcase our expertise and creativity.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {['all', 'web', 'mobile', 'AI'].map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-gray-50 border border-gray-200'
                }`}
                disabled={isFiltering}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="sync">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading={index <= 2 ? "eager" : "lazy"}
                    quality={85}
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                        className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
} 