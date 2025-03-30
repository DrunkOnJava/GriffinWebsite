// src/components/Features.jsx
import React from 'react';

export default function Features({ title, subtitle, features = [] }) {
  return (
    <section className="features">
      <div className="container">
        {title && <h2 data-sb-field-path="title">{title}</h2>}
        {subtitle && <p data-sb-field-path="subtitle">{subtitle}</p>}
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature" data-sb-field-path={`features.${index}`}>
              {feature.icon && (
                <div className="feature-icon" data-sb-field-path=".icon">
                  <i className={`icon-${feature.icon}`}></i>
                </div>
              )}
              
              {feature.image && (
                <div className="feature-image" data-sb-field-path=".image">
                  <img src={feature.image} alt={feature.title} />
                </div>
              )}
              
              <h3 data-sb-field-path=".title">{feature.title}</h3>
              {feature.description && <p data-sb-field-path=".description">{feature.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
