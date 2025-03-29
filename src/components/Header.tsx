import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-3">
                GL
              </div>
              <div className="text-xl font-semibold tracking-tight">
                <span className="text-indigo-600 dark:text-indigo-400">Griffin</span>Long
              </div>
            </a>

            <button
              className="block md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>

            <ul className="hidden md:flex items-center space-x-8">
              <li><a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50" 
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 z-50 shadow-lg transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
        <ul className="p-6 space-y-4">
          <li><a href="#home" className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#skills" className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="#projects" className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#contact" className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" onClick={closeMobileMenu}>Contact</a></li>
          <li>
            <button 
              onClick={() => {
                toggleDarkMode();
                closeMobileMenu();
              }}
              className="flex items-center text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-5 h-5 mr-2" />
                  Toggle Light Mode
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 mr-2" />
                  Toggle Dark Mode
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;