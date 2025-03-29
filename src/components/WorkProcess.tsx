import React from 'react';

const WorkProcess: React.FC = () => {
  const processSteps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'Understanding your needs through interviews, research, and detailed requirement gathering.'
    },
    {
      number: 2,
      title: 'Planning',
      description: 'Creating detailed specs, timelines, and technical approaches for efficient execution.'
    },
    {
      number: 3,
      title: 'Development',
      description: 'Building your solution using the most appropriate technologies with regular check-ins.'
    },
    {
      number: 4,
      title: 'Deployment',
      description: 'Thorough testing, documentation, deployment, and ongoing support for your project.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            My Work Process
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            How I approach projects to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-md p-8 text-center h-full flex flex-col justify-between z-10 relative dark:bg-gray-700">
                <div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl mx-auto mb-4 dark:bg-indigo-900/40 dark:text-indigo-400">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
              
              {/* Connector line - only for steps 1-3 */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-indigo-100 z-0 transform translate-x-1/2 dark:bg-gray-600">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;