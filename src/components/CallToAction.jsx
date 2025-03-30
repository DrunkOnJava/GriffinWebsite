// src/components/CallToAction.jsx
import React from 'react';

export default function CallToAction({ title, text, actions = [] }) {
  return (
    <section className="cta">
      <div className="container">
        <h2 data-sb-field-path="title">{title}</h2>
        {text && <p data-sb-field-path="text">{text}</p>}
        
        {actions.length > 0 && (
          <div className="cta-actions">
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
