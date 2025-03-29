import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-3">
                GL
              </div>
              <div className="text-xl font-semibold">
                <span className="text-indigo-400">Tech</span>Portfolio
              </div>
            </div>
            <p className="text-gray-400 max-w-xs">
              Delivering innovative technical solutions and creating impactful digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Griffin Long. All rights reserved.</p>
          <p className="text-gray-400">Designed with ❤️ for the tech community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;