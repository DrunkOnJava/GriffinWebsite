import React from 'react';
import { ArrowRight } from 'lucide-react';

const Articles: React.FC = () => {
  const articles = [
    {
      category: "Automation",
      date: "March 15, 2023",
      title: "The Future of PDF Processing in Healthcare Records",
      description: "How modern PDF processing techniques are revolutionizing healthcare data management while maintaining security and compliance. Learn about the latest approaches to extracting structured data from medical forms.",
      imageUrl: "https://images.unsplash.com/photo-1586772002130-b0f3daa6ea8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Development",
      date: "April 22, 2023",
      title: "Building Privacy-First Applications with SwiftUI",
      description: "A comprehensive guide to implementing robust privacy features in SwiftUI applications. This article covers local data processing, secure authentication, and privacy-by-design principles for iOS developers.",
      imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      category: "Workflow",
      date: "May 10, 2023",
      title: "5 Essential CLI Tools Every Developer Should Build",
      description: "Custom command-line tools can dramatically improve your productivity. This article walks through five practical CLI utilities you can build to automate repetitive tasks and streamline your development workflow.",
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            Thoughts and insights on technology, development, and automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:bg-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded dark:bg-indigo-900/30 dark:text-indigo-400">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 dark:text-white">{article.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">
                  {article.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-white border border-indigo-200 text-indigo-600 font-medium rounded-lg shadow-sm hover:bg-indigo-50 transition-all transform hover:-translate-y-1 hover:shadow-md dark:bg-gray-700 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-gray-600">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;