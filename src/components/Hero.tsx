import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-24">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div 
              className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 dark:bg-indigo-900/30 dark:text-indigo-400"
              data-aos="fade-up"
            >
              Healthcare-IT Professional
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Hello, I'm<br />
              <span className="text-indigo-600 dark:text-indigo-400">Griffin Long</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 dark:text-gray-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Bridging pharmacy expertise with cutting-edge technology to create innovative digital solutions for healthcare and beyond.
            </p>
            
            <div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 hover:bg-indigo-50 transition-all transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-gray-700"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden shadow-inner">
                <div className="text-9xl font-bold text-indigo-600/20 dark:text-indigo-400/20">GL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white dark:fill-gray-900">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;