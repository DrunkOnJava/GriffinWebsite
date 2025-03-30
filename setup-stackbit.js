#!/usr/bin/env node

/**
 * @fileoverview Automated Stackbit Integration Setup for Netlify and GitHub-based projects
 * 
 * Created: 2025-03-29
 * 
 * This script automatically creates the necessary files and directory structure
 * to integrate Stackbit with a Netlify-hosted, GitHub-managed website.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration object to store user inputs
const config = {
  projectName: '',
  netlifyName: '',
  gitHubRepo: '',
  frameworkType: '',
  buildCommand: '',
  publishDir: 'public'
};

/**
 * Creates directories recursively if they don't exist
 * @param {string} dirPath - Directory path to create
 */
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Creates a file with the specified content
 * @param {string} filePath - File path to create
 * @param {string} content - Content to write to the file
 */
function createFile(filePath, content) {
  const dirPath = path.dirname(filePath);
  createDirectory(dirPath);
  
  fs.writeFileSync(filePath, content);
  console.log(`Created file: ${filePath}`);
}

/**
 * Generates the stackbit.config.ts file
 */
function generateStackbitConfig() {
  const content = `/**
 * Stackbit Configuration File
 * 
 * Created for: ${config.projectName}
 * Netlify Site: ${config.netlifyName}
 * GitHub Repository: ${config.gitHubRepo}
 */

import { defineStackbitConfig, SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "${config.frameworkType === 'custom' ? 'custom' : config.frameworkType}",
  nodeVersion: "18",
  
  // Netlify-specific configuration
  deploymentType: "netlify",
  previewHost: "${config.netlifyName}",
  
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      assetsConfig: {
        referenceType: "static",
        staticDir: "${config.publishDir}",
        uploadDir: "${config.publishDir}/images",
        publicPath: "/images/"
      },
      models: [
        // Page Models
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "layout", type: "string", default: "page" },
            { name: "seo", type: "model", modelName: "SEO" },
            {
              name: "sections",
              type: "list",
              items: {
                type: "model",
                models: ["Hero", "Features", "CallToAction", "ContactForm"]
              }
            }
          ]
        },
        {
          name: "BlogPost",
          type: "page",
          urlPath: "/blog/{slug}",
          filePath: "content/blog/{slug}.md",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "layout", type: "string", default: "post" },
            { name: "author", type: "reference", models: ["Author"] },
            { name: "date", type: "date", required: true },
            { name: "featuredImage", type: "image" },
            { name: "excerpt", type: "string" },
            { name: "content", type: "markdown", required: true },
            { name: "tags", type: "list", items: { type: "string" } },
            { name: "seo", type: "model", modelName: "SEO" }
          ]
        },
        
        // Component Models
        {
          name: "Hero",
          type: "object",
          fields: [
            { name: "type", type: "string", default: "Hero", hidden: true },
            { name: "heading", type: "string", required: true },
            { name: "subheading", type: "string" },
            { name: "image", type: "image" },
            {
              name: "actions",
              type: "list",
              items: { type: "model", models: ["Button"] }
            }
          ]
        },
        {
          name: "Features",
          type: "object",
          fields: [
            { name: "type", type: "string", default: "Features", hidden: true },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
            {
              name: "features",
              type: "list",
              items: { type: "model", models: ["Feature"] }
            }
          ]
        },
        {
          name: "Feature",
          type: "object",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "icon", type: "string" },
            { name: "image", type: "image" }
          ]
        },
        {
          name: "CallToAction",
          type: "object",
          fields: [
            { name: "type", type: "string", default: "CallToAction", hidden: true },
            { name: "title", type: "string", required: true },
            { name: "text", type: "string" },
            { name: "actions", type: "list", items: { type: "model", models: ["Button"] } }
          ]
        },
        {
          name: "Button",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "url", type: "string", required: true },
            { name: "variant", type: "enum", options: ["primary", "secondary", "ghost"], default: "primary" }
          ]
        },
        {
          name: "ContactForm",
          type: "object",
          fields: [
            { name: "type", type: "string", default: "ContactForm", hidden: true },
            { name: "title", type: "string" },
            { name: "fields", type: "list", items: { type: "model", models: ["FormField"] } },
            { name: "submitLabel", type: "string", default: "Submit" },
            { name: "netlify", type: "boolean", default: true },
            { name: "formName", type: "string", default: "contact" }
          ]
        },
        {
          name: "FormField",
          type: "object",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "label", type: "string", required: true },
            { name: "type", type: "enum", options: ["text", "email", "textarea", "select", "checkbox"], required: true },
            { name: "required", type: "boolean", default: false },
            { name: "options", type: "list", items: { type: "string" } }
          ]
        },
        
        // Data Models
        {
          name: "Author",
          type: "data",
          filePath: "content/data/authors/{slug}.json",
          fields: [
            { name: "name", type: "string", required: true },
            { name: "slug", type: "string", required: true },
            { name: "bio", type: "markdown" },
            { name: "avatar", type: "image" },
            { name: "socialLinks", type: "list", items: { type: "model", models: ["SocialLink"] } }
          ]
        },
        {
          name: "SocialLink",
          type: "object",
          fields: [
            { name: "platform", type: "enum", options: ["twitter", "linkedin", "github", "facebook", "instagram"] },
            { name: "url", type: "string", required: true }
          ]
        },
        {
          name: "SEO",
          type: "object",
          fields: [
            { name: "metaTitle", type: "string" },
            { name: "metaDescription", type: "string" },
            { name: "metaImage", type: "image" },
            { name: "canonicalUrl", type: "string" },
            { name: "noindex", type: "boolean", default: false }
          ]
        },
        // Site config for global settings
        {
          name: "SiteConfig",
          type: "data",
          singleInstance: true,
          filePath: "content/data/config.json",
          fields: [
            { name: "title", type: "string", required: true },
            { name: "description", type: "string" },
            { name: "header", type: "model", models: ["Header"] },
            { name: "footer", type: "model", models: ["Footer"] }
          ]
        },
        {
          name: "Header",
          type: "object",
          fields: [
            { name: "logo", type: "image" },
            { name: "logoAlt", type: "string" },
            { name: "navigationLinks", type: "list", items: { type: "model", models: ["NavigationLink"] } }
          ]
        },
        {
          name: "Footer",
          type: "object",
          fields: [
            { name: "copyright", type: "string" },
            { name: "socialLinks", type: "list", items: { type: "model", models: ["SocialLink"] } },
            { name: "navigationLinks", type: "list", items: { type: "model", models: ["NavigationLink"] } }
          ]
        },
        {
          name: "NavigationLink",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "url", type: "string", required: true },
            { name: "newTab", type: "boolean", default: false }
          ]
        }
      ]
    })
  ],
  
  // Custom sitemap implementation
  siteMap: ({ documents, models }) => {
    // Find all page models
    const pageModels = models.filter((model) => model.type === "page");
    
    // Generate entries for each document that matches a page model
    const entries = documents
      .filter((document) => pageModels.some((model) => model.name === document.modelName))
      .map((document): SiteMapEntry | null => {
        // Generate appropriate URL paths based on document model
        switch (document.modelName) {
          case 'Page':
            return {
              stableId: document.id,
              urlPath: \`/\${document.fields.slug || ''}\`,
              document,
              // Set home page by checking for 'home' or 'index' slug
              isHomePage: document.fields.slug === 'home' || document.fields.slug === 'index' || document.fields.slug === '',
            };
            
          case 'BlogPost':
            return {
              stableId: document.id,
              urlPath: \`/blog/\${document.fields.slug || ''}\`,
              document,
              isHomePage: false,
            };
            
          default:
            return null;
        }
      })
      .filter(Boolean) as SiteMapEntry[];
      
    return entries;
  }
});
`;
  
  createFile('stackbit.config.ts', content);
}

/**
 * Generates the netlify.toml file
 */
function generateNetlifyToml() {
  const content = `# Netlify configuration file
# Site: ${config.netlifyName}
# Repo: ${config.gitHubRepo}

[build]
  publish = "${config.publishDir}"
  command = "${config.buildCommand}"

# Redirect and rewrite rules for SPA routing if needed
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Development configuration
[dev]
  framework = "#custom"
  command = "npm run dev"
  targetPort = 3000
  port = 8888
  publish = "${config.publishDir}"

# Netlify Functions if you're using them
[functions]
  directory = "netlify/functions"

# Headers for security and caching
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"

# Cache control for static assets
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
`;
  
  createFile('netlify.toml', content);
}

/**
 * Generates package.json file
 */
function generatePackageJson() {
  const frameworkDeps = {
    'next': {
      dependencies: {
        "next": "^14.0.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "gray-matter": "^4.0.3"
      },
      scripts: {
        "dev": "next dev",
        "build": "next build",
        "start": "next start"
      }
    },
    'gatsby': {
      dependencies: {
        "gatsby": "^5.0.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "gatsby-source-filesystem": "^5.0.0",
        "gatsby-transformer-remark": "^6.0.0"
      },
      scripts: {
        "dev": "gatsby develop",
        "build": "gatsby build",
        "start": "gatsby serve"
      }
    },
    'custom': {
      dependencies: {},
      scripts: {
        "dev": "npm run start:dev",
        "build": config.buildCommand,
        "start": "npm run start"
      }
    }
  };
  
  const framework = config.frameworkType in frameworkDeps 
    ? config.frameworkType 
    : 'custom';
  
  const packageJson = {
    "name": config.projectName.toLowerCase().replace(/\s+/g, '-'),
    "version": "1.0.0",
    "private": true,
    "scripts": {
      ...frameworkDeps[framework].scripts,
      "stackbit:dev": "npx @stackbit/cli dev",
      "stackbit:deploy": "npx @stackbit/cli deploy"
    },
    "dependencies": {
      ...frameworkDeps[framework].dependencies
    },
    "devDependencies": {
      "@stackbit/cli": "^0.6.0",
      "@stackbit/cms-git": "^0.4.0",
      "@stackbit/types": "^0.6.0",
      "typescript": "^5.0.0"
    }
  };
  
  createFile('package.json', JSON.stringify(packageJson, null, 2));
}

/**
 * Generates tsconfig.json file
 */
function generateTsConfig() {
  const content = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`;
  
  createFile('tsconfig.json', content);
}

/**
 * Generates GitHub workflow file for Stackbit preview
 */
function generateGithubWorkflow() {
  const content = `# GitHub workflow for Stackbit preview deployments
name: Stackbit Preview

on:
  pull_request:
    types: [opened, synchronize]
    branches:
      - main
      - master

jobs:
  build_and_preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy Preview
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=${config.publishDir} --message "Deploy PR Preview"
        env:
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
`;
  
  createFile('.github/workflows/stackbit-preview.yml', content);
}

/**
 * Generates example content files
 */
function generateExampleContent() {
  // Home page example
  const homePage = `---
title: Home Page
slug: home
seo:
  metaTitle: Welcome to ${config.projectName}
  metaDescription: Our homepage featuring our latest products and services
sections:
  - type: Hero
    heading: Welcome to ${config.projectName}
    subheading: Discover our amazing products and services
    image: /images/hero.jpg
    actions:
      - type: Button
        label: Learn More
        url: /about
        variant: primary
      - type: Button
        label: Contact Us
        url: /contact
        variant: secondary
  - type: Features
    title: Our Features
    subtitle: Discover what makes us special
    features:
      - type: Feature
        title: Fast Delivery
        description: Get your products delivered in record time
        icon: truck
      - type: Feature
        title: 24/7 Support
        description: Our support team is always available
        icon: headset
---`;
  
  createFile('content/pages/home.md', homePage);
  
  // About page example
  const aboutPage = `---
title: About Us
slug: about
seo:
  metaTitle: About ${config.projectName}
  metaDescription: Learn more about our company and team
sections:
  - type: Hero
    heading: About Our Company
    subheading: Our story, mission, and values
    image: /images/about-hero.jpg
  - type: CallToAction
    title: Join Our Team
    text: We're always looking for talented individuals to join our team.
    actions:
      - type: Button
        label: View Careers
        url: /careers
        variant: primary
---`;
  
  createFile('content/pages/about.md', aboutPage);
  
  // Blog post example
  const blogPost = `---
title: Getting Started with Stackbit
slug: getting-started-with-stackbit
author: john-doe
date: 2025-03-29
featuredImage: /images/blog/stackbit-intro.jpg
excerpt: Learn how to set up and leverage Stackbit for your website
tags:
  - tutorial
  - stackbit
seo:
  metaTitle: Getting Started with Stackbit | ${config.projectName} Blog
  metaDescription: A comprehensive guide to setting up Stackbit with your website
---

# Getting Started with Stackbit

Stackbit is a powerful platform that enables visual editing for your website. In this post, we'll explore how to set it up and make the most of its features.

## What is Stackbit?

Stackbit connects your content to your website, providing a visual editing interface that makes content management easy and intuitive.

## Key Benefits

1. Visual editing
2. Git-based content management
3. Seamless integration with existing websites
4. No vendor lock-in

Stay tuned for more tutorials on how to leverage Stackbit for your website!
`;
  
  createFile('content/blog/getting-started-with-stackbit.md', blogPost);
  
  // Author example
  const author = `{
  "name": "John Doe",
  "slug": "john-doe",
  "bio": "John is a senior developer with over 10 years of experience in web development.",
  "avatar": "/images/authors/john-doe.jpg",
  "socialLinks": [
    {
      "platform": "twitter",
      "url": "https://twitter.com/johndoe"
    },
    {
      "platform": "github",
      "url": "https://github.com/johndoe"
    }
  ]
}`;
  
  createFile('content/data/authors/john-doe.json', author);
  
  // Site config
  const siteConfig = `{
  "title": "${config.projectName}",
  "description": "Official website for ${config.projectName}",
  "header": {
    "logo": "/images/logo.svg",
    "logoAlt": "${config.projectName} Logo",
    "navigationLinks": [
      {
        "label": "Home",
        "url": "/"
      },
      {
        "label": "About",
        "url": "/about"
      },
      {
        "label": "Blog",
        "url": "/blog"
      },
      {
        "label": "Contact",
        "url": "/contact"
      }
    ]
  },
  "footer": {
    "copyright": "© ${new Date().getFullYear()} ${config.projectName}. All rights reserved.",
    "socialLinks": [
      {
        "platform": "twitter",
        "url": "https://twitter.com/${config.projectName.toLowerCase().replace(/\s+/g, '')}"
      },
      {
        "platform": "facebook",
        "url": "https://facebook.com/${config.projectName.toLowerCase().replace(/\s+/g, '')}"
      }
    ],
    "navigationLinks": [
      {
        "label": "Privacy Policy",
        "url": "/privacy"
      },
      {
        "label": "Terms of Service",
        "url": "/terms"
      }
    ]
  }
}`;
  
  createFile('content/data/config.json', siteConfig);
}

/**
 * Generates React component examples
 */
function generateComponentExamples() {
  // Page component
  const pageComponent = `// src/templates/page.jsx
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
          <div key={index} data-sb-field-path={\`sections.\${index}\`}>
            <Component {...section} />
          </div>
        );
      })}
    </div>
  );
}
`;
  
  createFile('src/templates/page.jsx', pageComponent);
  
  // Hero component
  const heroComponent = `// src/components/Hero.jsx
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
                className={\`button button-\${action.variant || 'primary'}\`}
                data-sb-field-path={\`actions.\${index}\`}
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
`;
  
  createFile('src/components/Hero.jsx', heroComponent);
  
  // Features component
  const featuresComponent = `// src/components/Features.jsx
import React from 'react';

export default function Features({ title, subtitle, features = [] }) {
  return (
    <section className="features">
      <div className="container">
        {title && <h2 data-sb-field-path="title">{title}</h2>}
        {subtitle && <p data-sb-field-path="subtitle">{subtitle}</p>}
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature" data-sb-field-path={\`features.\${index}\`}>
              {feature.icon && (
                <div className="feature-icon" data-sb-field-path=".icon">
                  <i className={\`icon-\${feature.icon}\`}></i>
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
`;
  
  createFile('src/components/Features.jsx', featuresComponent);
  
  // Call To Action component
  const ctaComponent = `// src/components/CallToAction.jsx
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
                className={\`button button-\${action.variant || 'primary'}\`}
                data-sb-field-path={\`actions.\${index}\`}
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
`;
  
  createFile('src/components/CallToAction.jsx', ctaComponent);
  
  // Contact Form component
  const contactFormComponent = `// src/components/ContactForm.jsx
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
            <div key={index} className="form-field" data-sb-field-path={\`fields.\${index}\`}>
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
                    <option key={optIndex} value={option} data-sb-field-path={\`.options.\${optIndex}\`}>
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
`;
  
  createFile('src/components/ContactForm.jsx', contactFormComponent);
}

/**
 * Generates a README.md file
 */
function generateReadme() {
  const content = `# ${config.projectName}

This project uses [Stackbit](https://www.stackbit.com/) for visual content editing with [Netlify](https://www.netlify.com/) hosting and [GitHub](https://github.com/) for source control.

## Quick Start

1. Clone this repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open Stackbit visual editor:
   \`\`\`bash
   npm run stackbit:dev
   \`\`\`

## Project Structure

- \`content/\` - Content files (pages, blog posts, data)
- \`src/\` - Source files (components, templates)
- \`public/\` - Static assets
- \`stackbit.config.ts\` - Stackbit configuration

## Deployment

This project is automatically deployed to Netlify when changes are pushed to the main branch of the GitHub repository.

## Content Editing

1. Use the Stackbit visual editor (\`npm run stackbit:dev\`)
2. Edit content files directly in the repository
3. Use the GitHub workflow for content changes:
   - Create a new branch
   - Make content changes
   - Create a pull request
   - Preview the changes in Netlify
   - Merge to main branch for production deployment

## Learn More

- [Stackbit Documentation](https://docs.stackbit.com/)
- [Netlify Documentation](https://docs.netlify.com/)
`;
  
  createFile('README.md', content);
}

/**
 * Creates placeholder images directory
 */
function createPlaceholderImages() {
  createDirectory(`${config.publishDir}/images`);
  createDirectory(`${config.publishDir}/images/blog`);
  createDirectory(`${config.publishDir}/images/authors`);
  
  // Create placeholder image files if needed
  // This implementation is simplified - actual image creation would require other libraries
  // For now, we'll just create placeholder files
  
  const placeholderContent = `# This is a placeholder file
# Replace with actual image files
`;
  
  createFile(`${config.publishDir}/images/hero.jpg.placeholder`, placeholderContent);
  createFile(`${config.publishDir}/images/about-hero.jpg.placeholder`, placeholderContent);
  createFile(`${config.publishDir}/images/logo.svg.placeholder`, placeholderContent);
  createFile(`${config.publishDir}/images/blog/stackbit-intro.jpg.placeholder`, placeholderContent);
  createFile(`${config.publishDir}/images/authors/john-doe.jpg.placeholder`, placeholderContent);
}

/**
 * Installs required dependencies
 */
function installDependencies() {
  console.log('Installing dependencies...');
  try {
    execSync('npm install --save-dev @stackbit/cli @stackbit/types @stackbit/cms-git typescript', { stdio: 'inherit' });
    console.log('Dependencies installed successfully.');
  } catch (error) {
    console.error('Error installing dependencies:', error);
  }
}

/**
 * Initializes the Stackbit configuration
 */
function initStackbit() {
  console.log('Initializing Stackbit...');
  try {
    execSync('npx @stackbit/cli init', { stdio: 'inherit' });
    console.log('Stackbit initialized successfully.');
  } catch (error) {
    console.error('Error initializing Stackbit:', error);
  }
}

/**
 * Main function to collect user input and set up the project
 */
function main() {
  console.log('Stackbit Integration Setup');
  console.log('=========================');
  
  const questions = [
    {
      prompt: 'Project name:',
      field: 'projectName',
      default: 'My Stackbit Project'
    },
    {
      prompt: 'Netlify site name (e.g., your-site.netlify.app):',
      field: 'netlifyName',
      default: 'griffin-radcliffe.netlify.app'
    },
    {
      prompt: 'GitHub repository (format: username/repo):',
      field: 'gitHubRepo',
      default: 'username/website-repo'
    },
    {
      prompt: 'Framework type (next, gatsby, or custom):',
      field: 'frameworkType',
      default: 'custom'
    },
    {
      prompt: 'Build command:',
      field: 'buildCommand',
      default: 'npm run build'
    },
    {
      prompt: 'Publish directory:',
      field: 'publishDir',
      default: 'public'
    }
  ];
  
  let currentQuestion = 0;
  
  function askQuestion() {
    if (currentQuestion < questions.length) {
      const { prompt, field, default: defaultValue } = questions[currentQuestion];
      rl.question(`${prompt} (${defaultValue}) `, (answer) => {
        config[field] = answer.trim() || defaultValue;
        currentQuestion++;
        askQuestion();
      });
    } else {
      rl.close();
      setupProject();
    }
  }
  
  askQuestion();
}

/**
 * Set up the project with all components
 */
function setupProject() {
  console.log('\nSetting up project with the following configuration:');
  console.log(JSON.stringify(config, null, 2));
  console.log('\nCreating necessary files and directories...');
  
  // Create directory structure
  createDirectory('content/pages');
  createDirectory('content/blog');
  createDirectory('content/data/authors');
  createDirectory(`${config.publishDir}/images`);
  createDirectory('src/components');
  createDirectory('src/templates');
  createDirectory('.github/workflows');
  
  // Generate configuration files
  generateStackbitConfig();
  generateNetlifyToml();
  generatePackageJson();
  generateTsConfig();
  generateGithubWorkflow();
  
  // Generate example content
  generateExampleContent();
  
  // Generate component examples
  generateComponentExamples();
  
  // Generate README
  generateReadme();
  
  // Create placeholder images
  createPlaceholderImages();
  
  // Install dependencies
  installDependencies();
  
  // Initialize Stackbit
  initStackbit();
  
  console.log('\nSetup complete! Your project is now configured for Stackbit visual editing with Netlify hosting and GitHub integration.');
  console.log('\nNext steps:');
  console.log('1. Push the changes to your GitHub repository');
  console.log('2. Connect the repository to Netlify');
  console.log('3. Run `npm run stackbit:dev` to start the visual editor');
  console.log('\nHappy editing!');
}

// Start the script
main();
