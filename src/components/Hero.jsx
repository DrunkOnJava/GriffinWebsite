// src/components/Hero.jsx
import React from 'react';

export default function Hero({ heading, subheading, image, actions = [] }) {
  return (
    <section className="hero">
      <div className="container">
        <h2 data-sb-field-path="heading">{heading}</h2>
        {subheading && <p data-sb-field-path="subheading">{subheading}</p>}
        
        {image && (
          <div className="hero-image" data-sb-field-path="image">
            <img src={image} alt={heading} />
          </div>
        )}
        
        {actions.length > 0 && (
          <div className="hero-actions">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.url}
                className={`button button-${action.variant || 'primary'}`}
                data-sb-field-path={`actions.${index}`}
              >
                <span data-sb-field-path=".label">{action.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
