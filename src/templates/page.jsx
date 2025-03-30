// src/templates/page.jsx
import React from 'react';

// Import component types
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';

// Component map for dynamic rendering
const componentMap = {
  Hero: Hero,
  Features: Features,
  CallToAction: CallToAction,
  ContactForm: ContactForm
};

export default function Page({ data }) {
  const { title, sections = [] } = data;
  
  return (
    <div data-sb-object-id={data.id}>
      <h1 data-sb-field-path="title">{title}</h1>
      
      {sections.map((section, index) => {
        const Component = componentMap[section.type];
        if (!Component) return null;
        
        return (
          <div key={index} data-sb-field-path={`sections.${index}`}>
            <Component {...section} />
          </div>
        );
      })}
    </div>
  );
}
