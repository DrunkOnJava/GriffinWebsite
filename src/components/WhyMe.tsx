import React from 'react';
import { Layers, Users, Shield } from 'lucide-react';

const WhyMe: React.FC = () => {
  const reasons = [
    {
      icon: <Layers className="w-12 h-12 text-indigo-600 mb-6 dark:text-indigo-400" />,
      title: "Hybrid Expertise",
      description: "Uniquely positioned to deliver specialized solutions that integrate technology seamlessly with healthcare operations and other specialized domains."
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600 mb-6 dark:text-indigo-400" />,
      title: "Precision & Professionalism",
      description: "Committed to delivering thoroughly documented, professionally crafted solutions optimized for long-term reliability and performance."
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600 mb-6 dark:text-indigo-400" />,
      title: "Collaboration & Customization",
      description: "Dedicated to understanding your unique challenges and crafting customized technological solutions tailored precisely to your needs."
    }
  ];

  return (
    <section id="why-me" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Why Work With Me
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            What sets my services apart from others
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2 dark:bg-gray-700"
            >
              <div className="flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;