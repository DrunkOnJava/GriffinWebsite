import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-gray-300">
              <p className="mb-6">
                I am a highly proficient and dedicated IT professional combining extensive pharmacy expertise with cutting-edge technological skills. My professional journey demonstrates a unique synergy between healthcare operations and advanced technical solutions.
              </p>
              <p className="mb-6">
                With a background as a certified pharmacy technician and formal education in Information Technology, I bring a unique interdisciplinary perspective to the development space. I create secure, scalable, user-centered tools that streamline workflows, enhance data usability, and empower clients to do more with less.
              </p>
              <p>
                I specialize in developing custom-built software and automation solutions that are both robust and intuitive — from advanced CLI tools and healthcare dashboards to sophisticated macOS/iOS applications and AI-integrated experiences.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-gray-50 shadow-md text-center dark:bg-gray-800">
                <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">5+</div>
                <div className="text-lg font-medium dark:text-gray-300">Years Experience</div>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 shadow-md text-center dark:bg-gray-800">
                <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">50+</div>
                <div className="text-lg font-medium dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 shadow-md text-center dark:bg-gray-800">
                <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">10+</div>
                <div className="text-lg font-medium dark:text-gray-300">Technologies</div>
              </div>
              <div className="p-6 rounded-lg bg-gray-50 shadow-md text-center dark:bg-gray-800">
                <div className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">20+</div>
                <div className="text-lg font-medium dark:text-gray-300">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;