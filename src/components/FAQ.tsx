import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What types of projects do you specialize in?",
      answer: "I specialize in custom software development for macOS/iOS platforms, automation tools, healthcare IT solutions, and data processing applications. My expertise is particularly valuable for projects that require local-first processing, security-conscious design, and specialized domain knowledge in healthcare and legal industries."
    },
    {
      question: "What is your development process like?",
      answer: "My development process is collaborative and transparent. It begins with in-depth discovery to understand your specific needs, followed by detailed planning and documentation. Development proceeds in regular cycles with frequent check-ins and demos to ensure alignment. I prioritize thorough testing, clear documentation, and post-deployment support to ensure your solution remains effective long-term."
    },
    {
      question: "How do you handle project pricing?",
      answer: "I offer flexible pricing options including project-based quotes, retainer arrangements, and milestone-based payment schedules. After our initial consultation, I'll provide a detailed proposal with transparent pricing based on project scope, complexity, and timeline. For ongoing work, I offer maintenance packages to ensure your solution stays up-to-date and performing optimally."
    },
    {
      question: "What is your approach to data security and privacy?",
      answer: "Security and privacy are foundational to my work. I design systems with a 'privacy by default' approach, minimizing data collection to only what's necessary. I implement industry best practices for data encryption, secure authentication, and access controls. For healthcare and legal applications, I ensure compliance with relevant regulations and standards like HIPAA. When possible, I favor local processing solutions that keep sensitive data on your own devices rather than in the cloud."
    },
    {
      question: "Do you provide support after project completion?",
      answer: "Absolutely. I offer comprehensive post-project support including bug fixes, feature enhancements, and regular maintenance. I can provide detailed documentation, training sessions, and ongoing technical consultation. For more complex systems, I offer service level agreements (SLAs) with guaranteed response times. I'm committed to the long-term success of your project, not just the initial delivery."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            Common questions about my services and process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`mt-3 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;