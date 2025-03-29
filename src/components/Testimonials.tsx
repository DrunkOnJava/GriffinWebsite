import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Griffin revolutionized our workflow with custom automation that cut our document processing time by 70%. His approach was thorough, thoughtful, and focused on our specific needs.",
      name: "James Davidson",
      title: "CEO, LegalTech Solutions",
      initials: "JD"
    },
    {
      quote: "Griffin's iOS app development skills are exceptional. He transformed our vague concept into a beautifully designed, intuitive application that our customers love. He's incredibly responsive and truly cares about the end result.",
      name: "Sarah Wilson",
      title: "Product Manager, HealthTrack",
      initials: "SW"
    },
    {
      quote: "Griffin built us a custom PDF processing utility that handles thousands of documents daily without a hitch. What impressed me most was his focus on security and data privacy throughout the entire development process.",
      name: "Michael Thompson",
      title: "CTO, DataSecure Inc.",
      initials: "MT"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative after:content-[''] after:absolute after:bottom-[-0.25rem] after:left-0 after:w-full after:h-1 after:bg-indigo-500/50 after:rounded-full dark:text-white">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto dark:text-gray-300">
            What people say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md relative dark:bg-gray-800"
            >
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-6xl text-indigo-200 font-serif leading-none pointer-events-none dark:text-indigo-900/30">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-600 mb-6 dark:text-gray-300">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg mr-4 dark:bg-indigo-900/40 dark:text-indigo-400">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;