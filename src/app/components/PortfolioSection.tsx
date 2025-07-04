'use client';

import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { 
      id: 1, 
      title: "E-Commerce Platform", 
      category: "web", 
      description: "Modern React-based e-commerce solution",
      image: "https://picsum.photos/400/300?random=1",
      tech: ["React", "Node.js", "MongoDB"]
    },
    { 
      id: 2, 
      title: "Fitness App", 
      category: "mobile", 
      description: "Cross-platform mobile application",
      image: "https://picsum.photos/400/300?random=2",
      tech: ["React Native", "Firebase", "TypeScript"]
    },
    { 
      id: 3, 
      title: "AI Analytics Dashboard", 
      category: "ai", 
      description: "Machine learning-powered insights",
      image: "https://picsum.photos/400/300?random=3",
      tech: ["Python", "TensorFlow", "React"]
    },
    { 
      id: 4, 
      title: "Corporate Website", 
      category: "web", 
      description: "Professional business platform",
      image: "https://picsum.photos/400/300?random=4",
      tech: ["Next.js", "Tailwind", "Framer Motion"]
    },
    { 
      id: 5, 
      title: "Delivery App", 
      category: "mobile", 
      description: "Real-time logistics solution",
      image: "https://picsum.photos/400/300?random=5",
      tech: ["Flutter", "Google Maps", "Firebase"]
    },
    { 
      id: 6, 
      title: "Chatbot System", 
      category: "ai", 
      description: "Intelligent customer service automation",
      image: "https://picsum.photos/400/300?random=6",
      tech: ["OpenAI", "Node.js", "WebSocket"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Work</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of innovative projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {['all', 'web', 'mobile', 'ai'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 