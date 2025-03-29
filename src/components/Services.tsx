import React from 'react';
import { Smartphone, Terminal, Stethoscope, Cpu, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-indigo-600 mb-4 dark:text-indigo-400" />,
      title: "iOS & macOS Development",
      description: "Custom native applications for Apple platforms, featuring SwiftUI interfaces, CoreML integration, and robust security features."
    },
    {
      icon: <Terminal className="w-12 h-12 text-indigo-600 mb-4 dark:text-indigo-400" />,
      title: "Automation & Workflow",
      description: "Custom scripting and automation tools to streamline repetitive tasks, enhance productivity, and optimize business operations."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-indigo-600 mb-4 dark:text-indigo-400" />,
      title: "Healthcare IT Solutions",
      description: "Specialized applications and tools that bridge healthcare operations with technology, including medication tracking and healthcare data processing."
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-600 mb-4 dark:text-indigo-400" />,
      title: "AI-Powered Tool Development",
      description: "Creating applications that leverage advanced AI models and machine learning, including intelligent document processing, data analysis, and workflow optimization."
    },
    {
      icon: <Wrench className="w-12 h-12 text-indigo-600 mb-4 dark:text-indigo-400" />,
      title: "Technical Consulting & Diagnostics",
      description: "Expert analysis, troubleshooting, and optimization of technical systems and development environments, including custom diagnostic tools and documentation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Freelance Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            Professional technical consulting and development services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:bg-gray-800"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;