import React from 'react';
import { Code, Terminal, BarChart3, ChevronRight, Workflow, FileSearch, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            Here are some of my recent works that showcase my technical skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center p-6">
              <Code className="w-24 h-24 text-white" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-xl dark:text-white">LLMBuddy iOS App</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded dark:bg-blue-900/30 dark:text-blue-400">iOS App</span>
              </div>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                A cutting-edge iOS app designed to optimize large language model usage by intelligently chunking text inputs, with advanced error diagnostics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Swift</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">SwiftUI</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Alamofire</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">KeychainAccess</span>
              </div>
              <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800">
            <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center p-6">
              <Terminal className="w-24 h-24 text-white" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-xl dark:text-white">Xcode Diagnostics Tool</h3>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-medium rounded dark:bg-emerald-900/30 dark:text-emerald-400">CLI Tool</span>
              </div>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                A comprehensive bash script tool that automatically diagnoses and troubleshoots Xcode project issues, with interactive scheme selection and error summaries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Bash</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Xcode CLI</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">macOS</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Error Handling</span>
              </div>
              <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800">
            <div className="h-48 bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center p-6">
              <BarChart3 className="w-24 h-24 text-white" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-xl dark:text-white">macMonitor Dashboard</h3>
                <span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs font-medium rounded dark:bg-amber-900/30 dark:text-amber-400">macOS App</span>
              </div>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                A macOS app with a user-friendly dashboard to visualize real-time file system activities, Finder interactions, and iCloud sync issues.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Swift</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">SwiftUI</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">macOS APIs</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded dark:bg-gray-700 dark:text-gray-300">Terminal Integration</span>
              </div>
              <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300">
                View Details
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;