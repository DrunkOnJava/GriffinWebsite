import React from 'react';

const Journey: React.FC = () => {
  const journeySteps = [
    {
      period: "2018 - 2019",
      title: "Pharmacy Technician & Junior Developer",
      description: "Started coding to automate pharmacy workflows while working as a certified pharmacy technician. Created my first automation tools using Python and JavaScript."
    },
    {
      period: "2019 - 2020",
      title: "IT Support Specialist",
      description: "Transitioned to IT role while completing formal technical education. Built internal tools for ticket management and scripted network diagnostics for the support team."
    },
    {
      period: "2020 - 2021",
      title: "Full Stack Developer",
      description: "Joined a healthcare software company as a full stack developer. Worked on patient data systems, security improvements, and UI redesigns for medical applications."
    },
    {
      period: "2021 - 2022",
      title: "iOS & macOS Developer",
      description: "Specialized in Apple ecosystem development. Created native applications with SwiftUI and learned advanced CoreML integration for healthcare diagnostics applications."
    },
    {
      period: "2022 - Present",
      title: "Independent Technical Consultant",
      description: "Founded my own consultancy specializing in custom software development, automation solutions, and technical infrastructure design for healthcare, legal, and small business clients."
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            My career path and key milestones
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-12 last:mb-0">
              {/* Timeline dot and line */}
              <div className="hidden md:flex flex-col items-center mr-8">
                <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                {index < journeySteps.length - 1 && (
                  <div className="w-0.5 h-full bg-indigo-200 mt-2 dark:bg-indigo-800"></div>
                )}
              </div>
              
              {/* Time period */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="inline-block md:hidden w-2 h-2 rounded-full bg-indigo-600 mr-2 dark:bg-indigo-400"></span>
                <span className="text-indigo-600 font-bold dark:text-indigo-400">{step.period}</span>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;