import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            Have a project in mind or want to explore collaboration opportunities? Get in touch!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md dark:bg-gray-700">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Get In Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 dark:text-gray-200">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 dark:text-gray-200">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 dark:text-gray-200">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  placeholder="How can I help you?" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 dark:text-gray-200">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-y min-h-[8rem] dark:bg-gray-600 dark:border-gray-500 dark:text-white" 
                  placeholder="Your message here..." 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg dark:bg-green-800/30 dark:text-green-400">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg dark:bg-red-800/30 dark:text-red-400">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0 dark:bg-indigo-800/40">
                  <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">griffin.long@example.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0 dark:bg-indigo-800/40">
                  <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+1 (703) 625-1555</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0 dark:bg-indigo-800/40">
                  <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA, USA</p>
                </div>
              </div>
            </div>
            
            {/* Subscribe form */}
            <div className="bg-white p-6 rounded-xl shadow-md dark:bg-gray-700">
              <h3 className="text-lg font-bold mb-3 dark:text-white">Connect With Me</h3>
              <div className="mb-4">
                <label htmlFor="subscribe-email" className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-300">
                  Stay updated with my latest projects and tech insights
                </label>
                <div className="flex">
                  <input
                    type="email"
                    id="subscribe-email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-100 p-6 rounded-xl shadow-md h-full flex items-center justify-center dark:bg-indigo-900/20">
              <p className="text-indigo-800 text-lg font-medium dark:text-indigo-300">Available for remote work worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;