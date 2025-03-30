// src/components/ContactForm.jsx
import React from 'react';

export default function ContactForm({ title, fields = [], submitLabel, formName, netlify }) {
  return (
    <section className="contact-form">
      <div className="container">
        {title && <h2 data-sb-field-path="title">{title}</h2>}
        
        <form 
          name={formName || 'contact'} 
          method="POST" 
          data-netlify={netlify ? 'true' : null}
          netlify-honeypot="bot-field"
        >
          {/* Hidden field for Netlify form recognition */}
          <input type="hidden" name="form-name" value={formName || 'contact'} />
          <input type="hidden" name="bot-field" />
          
          {fields.map((field, index) => (
            <div key={index} className="form-field" data-sb-field-path={`fields.${index}`}>
              <label htmlFor={field.name} data-sb-field-path=".label">{field.label}</label>
              
              {field.type === 'textarea' ? (
                <textarea 
                  name={field.name} 
                  id={field.name} 
                  required={field.required} 
                  data-sb-field-path=".name .required"
                />
              ) : field.type === 'select' ? (
                <select 
                  name={field.name} 
                  id={field.name} 
                  required={field.required}
                  data-sb-field-path=".name .required"
                >
                  {field.options?.map((option, optIndex) => (
                    <option key={optIndex} value={option} data-sb-field-path={`.options.${optIndex}`}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input 
                  type={field.type} 
                  name={field.name} 
                  id={field.name} 
                  required={field.required}
                  data-sb-field-path=".name .type .required"
                />
              )}
            </div>
          ))}
          
          <button type="submit" data-sb-field-path="submitLabel">{submitLabel || 'Submit'}</button>
        </form>
      </div>
    </section>
  );
}
