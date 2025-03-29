import React from 'react';
import { Check } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            My technical expertise spans across multiple domains and technologies
          </p>
        </div>
        
        {/* Core competencies */}
        <div className="mb-16">
          <h3 className="text-center md:text-left text-2xl font-bold mb-6 dark:text-white">Core Competencies</h3>
          <div className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-700">
            <div className="mb-4 flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">Full Stack Development:</span>
                <span className="text-gray-700 dark:text-gray-300"> HTML, CSS, JavaScript, Python, Swift/SwiftUI, Bash/Shell scripting</span>
              </div>
            </div>
            
            <div className="mb-4 flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">macOS & iOS App Development:</span>
                <span className="text-gray-700 dark:text-gray-300"> Native apps using Xcode, SwiftUI, CoreML, and Apple's Neural Engine</span>
              </div>
            </div>
            
            <div className="mb-4 flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">Automation & Scripting:</span>
                <span className="text-gray-700 dark:text-gray-300"> CLI tools, shell scripts, AppleScript, Hazel, and custom workflow automation</span>
              </div>
            </div>
            
            <div className="mb-4 flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">Data Structuring & Transformation:</span>
                <span className="text-gray-700 dark:text-gray-300"> Markdown/HTML parsers, PDF-to-structured-data processing, Excel automation</span>
              </div>
            </div>
            
            <div className="mb-4 flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">Privacy-Respectful OSINT Tools:</span>
                <span className="text-gray-700 dark:text-gray-300"> Building ethical, locally executed tools for secure research and court record navigation</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0 dark:text-indigo-400" />
              <div>
                <span className="font-semibold dark:text-white">API Integration & Custom Utilities:</span>
                <span className="text-gray-700 dark:text-gray-300"> Leveraging APIs to build modular, low-latency, and efficient backend workflows</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* What Sets Me Apart section */}
        <div className="mb-16">
          <h3 className="text-center md:text-left text-2xl font-bold mb-6 dark:text-white">What Sets Me Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Systems-Level Thinking</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I approach every project with a holistic mindset, optimizing how components interact across the stack.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Human-Centered Development</h4>
              <p className="text-gray-700 dark:text-gray-300">
                My tools are designed for real users, not just technical audiences. I prioritize clarity, accessibility, and UX from terminal to UI.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Precision from Healthcare Experience</h4>
              <p className="text-gray-700 dark:text-gray-300">
                My background in pharmacy instilled a high attention to detail, compliance, and risk management — all of which inform how I write, test, and secure code.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
              <h4 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Local-First Philosophy</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I prioritize on-device performance, security, and privacy. Many of my tools run offline, with local processing and no external dependencies.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">HTML/CSS/JavaScript</span>
              <span className="dark:text-gray-300">95%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: '95%' }}></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">Python/Shell Scripting</span>
              <span className="dark:text-gray-300">90%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: '90%' }}></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">Swift/SwiftUI</span>
              <span className="dark:text-gray-300">85%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">Automation/Workflow Design</span>
              <span className="dark:text-gray-300">92%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: '92%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">UI/UX Design</span>
              <span className="dark:text-gray-300">80%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-600">
              <div className="h-full bg-indigo-600 rounded-full dark:bg-indigo-500" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;