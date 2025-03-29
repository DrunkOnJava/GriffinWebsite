import React from 'react';
import { Code, File as FileHtml, FileJson, PencilRuler, Terminal, Chrome, Database, Workflow, Cpu, FileLock2, Laptop, GitBranch, LucideSwissFranc, Server, BarChartBig, FileText } from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    { name: 'JavaScript', icon: <FileJson className="w-8 h-8 mb-3 text-yellow-500" /> },
    { name: 'HTML5', icon: <FileHtml className="w-8 h-8 mb-3 text-orange-500" /> },
    { name: 'CSS3', icon: <PencilRuler className="w-8 h-8 mb-3 text-blue-500" /> },
    { name: 'Python', icon: <Code className="w-8 h-8 mb-3 text-green-600" /> },
    { name: 'Swift', icon: <LucideSwissFranc className="w-8 h-8 mb-3 text-orange-600" /> },
    { name: 'Bash/Shell', icon: <Terminal className="w-8 h-8 mb-3 text-gray-600" /> },
    { name: 'Git', icon: <GitBranch className="w-8 h-8 mb-3 text-red-600" /> },
    { name: 'SwiftUI', icon: <Laptop className="w-8 h-8 mb-3 text-blue-600" /> },
    { name: 'Databases', icon: <Database className="w-8 h-8 mb-3 text-indigo-600" /> },
    { name: 'API Integration', icon: <Server className="w-8 h-8 mb-3 text-purple-600" /> },
    { name: 'UI/UX Design', icon: <Chrome className="w-8 h-8 mb-3 text-teal-600" /> },
    { name: 'Automation', icon: <Workflow className="w-8 h-8 mb-3 text-green-500" /> },
    { name: 'PDF Processing', icon: <FileText className="w-8 h-8 mb-3 text-red-500" /> },
    { name: 'CoreML', icon: <Cpu className="w-8 h-8 mb-3 text-blue-700" /> },
    { name: 'Security', icon: <FileLock2 className="w-8 h-8 mb-3 text-indigo-700" /> },
    { name: 'Neural Engine', icon: <BarChartBig className="w-8 h-8 mb-3 text-purple-700" /> }
  ];

  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Technologies & Tools
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            My tech stack and the tools I use to create efficient, innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 dark:bg-gray-800 flex flex-col items-center"
            >
              {tech.icon}
              <span className="text-gray-800 font-medium dark:text-gray-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;