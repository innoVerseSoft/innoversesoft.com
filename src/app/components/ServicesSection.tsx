'use client';

import { Code, Smartphone, Globe, Zap } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    { icon: Code, title: "Web Development", description: "Modern, responsive websites and web applications", color: "from-indigo-500 to-blue-500" },
    { icon: Smartphone, title: "Mobile Apps", description: "Cross-platform mobile solutions for iOS and Android", color: "from-emerald-500 to-green-500" },
    { icon: Globe, title: "Cloud Solutions", description: "Scalable cloud infrastructure and deployment", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, title: "AI & Machine Learning", description: "Intelligent automation and data analytics", color: "from-purple-500 to-indigo-500" }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 