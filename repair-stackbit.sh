#!/bin/bash

# Stackbit Integration Verification and Repair Script
# Customized for: DrunkOnJava/GriffinWebsite on griffin-radcliffe.netlify.app
# Working directory: /Users/griffin/Projects/build

# Terminal colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration variables
PROJECT_DIR="/Users/griffin/Projects/build"
PROJECT_NAME="ProfessionalWebsiteGriffin"
NETLIFY_SITE="griffin-radcliffe"
GITHUB_REPO="DrunkOnJava/GriffinWebsite"
BUILD_COMMAND="npm run build"
PUBLISH_DIR="public"

echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}  Stackbit Integration Verification & Repair  ${NC}"
echo -e "${BLUE}==============================================${NC}"
echo -e "${BLUE}GitHub Repo: ${NC}${GITHUB_REPO}"
echo -e "${BLUE}Netlify Site: ${NC}${NETLIFY_SITE}.netlify.app"
echo -e "${BLUE}Working Dir: ${NC}${PROJECT_DIR}"
echo ""

# Navigate to the project directory
cd "$PROJECT_DIR" || { echo -e "${RED}Error: Cannot access project directory${NC}"; exit 1; }

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# 1. Verify installed dependencies
echo -e "${YELLOW}Step 1: Verifying installed dependencies...${NC}"

if ! command_exists node; then
  echo -e "${RED}Error: Node.js is not installed.${NC}"
  exit 1
fi

if ! command_exists npm; then
  echo -e "${RED}Error: npm is not installed.${NC}"
  exit 1
fi

NODE_VERSION=$(node -v)
NPM_VERSION=$(npm -v)
echo -e "Node.js version: ${GREEN}$NODE_VERSION${NC}"
echo -e "npm version: ${GREEN}$NPM_VERSION${NC}"

# 2. Check Stackbit CLI version and configuration format
echo -e "\n${YELLOW}Step 2: Checking Stackbit CLI version and configuration...${NC}"

# Install Stackbit CLI if not already installed
if ! command_exists npx || ! npx @stackbit/cli --version >/dev/null 2>&1; then
  echo "Installing Stackbit CLI..."
  npm install --save-dev @stackbit/cli@0.3.133
else
  STACKBIT_VERSION=$(npx @stackbit/cli --version 2>/dev/null || echo "unknown")
  echo -e "Stackbit CLI version: ${GREEN}$STACKBIT_VERSION${NC}"
fi

# Check for configuration files
if [ -f "stackbit.config.ts" ]; then
  echo -e "${YELLOW}Found TypeScript config (stackbit.config.ts) which is incompatible with CLI 0.3.x${NC}"
  echo "Creating backup and removing..."
  mv stackbit.config.ts stackbit.config.ts.bak
fi

if [ ! -f "stackbit.yaml" ]; then
  echo -e "${YELLOW}No stackbit.yaml found. Creating one...${NC}"
  
  # Create a stackbit.yaml file compatible with CLI 0.3.x
  cat > stackbit.yaml << EOF
# stackbit.yaml - Generated for $PROJECT_NAME
stackbitVersion: ~0.3.0
ssgName: custom
nodeVersion: '18'
devCommand: npm run dev
buildCommand: $BUILD_COMMAND
publishDir: $PUBLISH_DIR
deploymentType: netlify

models:
  page:
    type: page
    label: Page
    fields:
      - type: string
        name: title
        label: Title
        required: true
      - type: string
        name: slug
        label: Slug
        required: true
      - type: list
        name: sections
        label: Sections
        items:
          type: model
          models:
            - hero
            - features
            - callToAction
            - contactForm
  
  blogPost:
    type: page
    label: Blog Post
    folder: content/blog
    urlPath: /blog/{slug}
    fields:
      - type: string
        name: title
        label: Title
        required: true
      - type: string
        name: slug
        label: Slug
        required: true
      - type: date
        name: date
        label: Date
        required: true
      - type: image
        name: featuredImage
        label: Featured Image
      - type: string
        name: excerpt
        label: Excerpt
      - type: markdown
        name: content
        label: Content
        required: true
      - type: list
        name: tags
        label: Tags
        items:
          type: string

  hero:
    type: object
    label: Hero
    fields:
      - type: string
        name: heading
        label: Heading
        required: true
      - type: string
        name: subheading
        label: Subheading
      - type: image
        name: image
        label: Image
      - type: list
        name: actions
        label: Actions
        items:
          type: model
          models:
            - button

  features:
    type: object
    label: Features Section
    fields:
      - type: string
        name: title
        label: Title
      - type: string
        name: subtitle
        label: Subtitle
      - type: list
        name: features
        label: Features
        items:
          type: model
          models:
            - feature

  feature:
    type: object
    label: Feature
    fields:
      - type: string
        name: title
        label: Title
        required: true
      - type: string
        name: description
        label: Description
      - type: string
        name: icon
        label: Icon
      - type: image
        name: image
        label: Image

  callToAction:
    type: object
    label: Call to Action
    fields:
      - type: string
        name: title
        label: Title
        required: true
      - type: string
        name: text
        label: Text
      - type: list
        name: actions
        label: Actions
        items:
          type: model
          models:
            - button

  button:
    type: object
    label: Button
    fields:
      - type: string
        name: label
        label: Label
        required: true
      - type: string
        name: url
        label: URL
        required: true
      - type: enum
        name: variant
        label: Variant
        options:
          - primary
          - secondary
          - ghost
        default: primary

  contactForm:
    type: object
    label: Contact Form
    fields:
      - type: string
        name: title
        label: Title
      - type: list
        name: fields
        label: Fields
        items:
          type: model
          models:
            - formField
      - type: string
        name: submitLabel
        label: Submit Button Label
        default: Submit
      - type: boolean
        name: netlify
        label: Use Netlify Forms
        default: true
      - type: string
        name: formName
        label: Form Name
        default: contact

  formField:
    type: object
    label: Form Field
    fields:
      - type: string
        name: name
        label: Name
        required: true
      - type: string
        name: label
        label: Label
        required: true
      - type: enum
        name: type
        label: Field Type
        options:
          - text
          - email
          - textarea
          - select
          - checkbox
        required: true
      - type: boolean
        name: required
        label: Required
        default: false
      - type: list
        name: options
        label: Options
        items:
          type: string

contentModels:
  page:
    isPage: true
    urlPath: "/{slug}"
    newFilePath: "content/pages/{slug}.md"
  blogPost:
    isPage: true
    urlPath: "/blog/{slug}"
    newFilePath: "content/blog/{slug}.md"
EOF

  echo -e "${GREEN}Created stackbit.yaml file compatible with CLI 0.3.x${NC}"
else
  echo -e "${GREEN}stackbit.yaml exists${NC}"
fi

# 3. Update package.json
echo -e "\n${YELLOW}Step 3: Updating package.json...${NC}"

if [ -f "package.json" ]; then
  # Create a backup
  cp package.json package.json.bak
  
  # Update package.json using node
  node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Update dependencies
    if (pkg.devDependencies) {
      if (pkg.devDependencies['@stackbit/cli']) {
        pkg.devDependencies['@stackbit/cli'] = '^0.3.133';
      }
      // Remove TypeScript dependencies if they exist
      delete pkg.devDependencies['@stackbit/types'];
      delete pkg.devDependencies['@stackbit/cms-git'];
    }
    
    // Make sure scripts are defined
    if (!pkg.scripts) {
      pkg.scripts = {};
    }
    
    // Add/update Stackbit scripts
    pkg.scripts['stackbit:dev'] = 'npx @stackbit/cli dev';
    pkg.scripts['stackbit:deploy'] = 'npx @stackbit/cli deploy';
    
    // Write the updated package.json
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
  
  echo -e "${GREEN}Updated package.json with correct dependencies and scripts${NC}"
else
  echo -e "${RED}package.json not found. Creating basic package.json...${NC}"
  
  # Create a minimal package.json
  cat > package.json << EOF
{
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "echo 'No dev command configured'",
    "build": "$BUILD_COMMAND",
    "stackbit:dev": "npx @stackbit/cli dev",
    "stackbit:deploy": "npx @stackbit/cli deploy"
  },
  "devDependencies": {
    "@stackbit/cli": "^0.3.133"
  }
}
EOF

  echo -e "${GREEN}Created basic package.json${NC}"
fi

# 4. Check and update Netlify configuration
echo -e "\n${YELLOW}Step 4: Checking Netlify configuration...${NC}"

if [ -f "netlify.toml" ]; then
  echo -e "${GREEN}netlify.toml exists${NC}"
else
  echo -e "${YELLOW}netlify.toml not found. Creating...${NC}"
  
  cat > netlify.toml << EOF
# Netlify configuration for $PROJECT_NAME
# Site: $NETLIFY_SITE.netlify.app
# Repo: $GITHUB_REPO

[build]
  publish = "$PUBLISH_DIR"
  command = "$BUILD_COMMAND"

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
  publish = "$PUBLISH_DIR"

# Headers for security and caching
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"
EOF

  echo -e "${GREEN}Created netlify.toml${NC}"
fi

# 5. Check directory structure
echo -e "\n${YELLOW}Step 5: Verifying directory structure...${NC}"

# Define directories to check
DIRECTORIES=(
  "content/pages"
  "content/blog"
  "content/data/authors"
  "$PUBLISH_DIR/images"
  "src/components"
  "src/templates"
  ".github/workflows"
)

for dir in "${DIRECTORIES[@]}"; do
  if [ ! -d "$dir" ]; then
    echo -e "Creating directory: ${BLUE}$dir${NC}"
    mkdir -p "$dir"
  else
    echo -e "Directory exists: ${GREEN}$dir${NC}"
  fi
done

# 6. Check for GitHub workflow
echo -e "\n${YELLOW}Step 6: Checking GitHub workflow...${NC}"

WORKFLOW_FILE=".github/workflows/stackbit-preview.yml"
if [ ! -f "$WORKFLOW_FILE" ]; then
  echo -e "${YELLOW}GitHub workflow not found. Creating...${NC}"
  
  cat > "$WORKFLOW_FILE" << EOF
# GitHub workflow for Stackbit preview deployments
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
          args: deploy --dir=$PUBLISH_DIR --message "Deploy PR Preview"
        env:
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
EOF

  echo -e "${GREEN}Created GitHub workflow file${NC}"
else
  echo -e "${GREEN}GitHub workflow exists${NC}"
fi

# 7. Install dependencies
echo -e "\n${YELLOW}Step 7: Installing required dependencies...${NC}"
npm install

# 8. Initialize Stackbit if needed
echo -e "\n${YELLOW}Step 8: Checking Stackbit initialization...${NC}"

# Check if Stackbit is initialized (by checking for .stackbit directory)
if [ ! -d ".stackbit" ]; then
  echo "Initializing Stackbit..."
  npx @stackbit/cli init || echo -e "${YELLOW}Note: Initialization might show warnings if already partially initialized${NC}"
else
  echo -e "${GREEN}Stackbit appears to be initialized (.stackbit directory exists)${NC}"
fi

# 9. Setup Netlify connection
echo -e "\n${YELLOW}Step 9: Setting up Netlify connection...${NC}"
echo -e "${BLUE}This step requires authentication with Netlify.${NC}"
echo -e "${BLUE}You may need to authorize the Stackbit CLI in your browser.${NC}"

read -p "Do you want to run the Netlify connection now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Connecting to Netlify site: $NETLIFY_SITE"
  npx @stackbit/cli netlify:connect --netlify-site="$NETLIFY_SITE"
  
  echo "Creating Netlify build hook..."
  npx @stackbit/cli netlify:hook --netlify-site="$NETLIFY_SITE"
else
  echo -e "${YELLOW}Skipping Netlify connection. You can run this later with:${NC}"
  echo "npx @stackbit/cli netlify:connect --netlify-site=$NETLIFY_SITE"
  echo "npx @stackbit/cli netlify:hook --netlify-site=$NETLIFY_SITE"
fi

# 10. Final verification and steps
echo -e "\n${YELLOW}Step 10: Final verification...${NC}"

# Check if content files exist
if [ ! -f "content/pages/home.md" ]; then
  echo -e "${YELLOW}No content files found. Creating example content...${NC}"
  
  # Create sample home page
  cat > "content/pages/home.md" << EOF
---
title: Home Page
slug: home
sections:
  - type: hero
    heading: Welcome to $PROJECT_NAME
    subheading: Your professional website
    image: /images/hero.jpg
    actions:
      - type: button
        label: Learn More
        url: /about
        variant: primary
      - type: button
        label: Contact
        url: /contact
        variant: secondary
  - type: features
    title: Our Features
    subtitle: What we offer
    features:
      - type: feature
        title: Professional Service
        description: Top-quality service for all clients
      - type: feature
        title: Expert Support
        description: Our team is always available to help
---
EOF

  # Create sample about page
  cat > "content/pages/about.md" << EOF
---
title: About
slug: about
sections:
  - type: hero
    heading: About $PROJECT_NAME
    subheading: Learn more about our services
    image: /images/about-hero.jpg
  - type: callToAction
    title: Get in Touch
    text: Ready to start working with us?
    actions:
      - type: button
        label: Contact Us
        url: /contact
        variant: primary
---
EOF

  echo -e "${GREEN}Created example content pages${NC}"
fi

# Create placeholder image files if needed
if [ ! -f "$PUBLISH_DIR/images/hero.jpg" ] && [ ! -f "$PUBLISH_DIR/images/hero.jpg.placeholder" ]; then
  echo -e "${YELLOW}Creating placeholder image files...${NC}"
  echo "# This is a placeholder file. Replace with an actual image." > "$PUBLISH_DIR/images/hero.jpg.placeholder"
  echo "# This is a placeholder file. Replace with an actual image." > "$PUBLISH_DIR/images/about-hero.jpg.placeholder"
fi

# 11. Summary and next steps
echo -e "\n${GREEN}=========================================${NC}"
echo -e "${GREEN}  Stackbit Integration Setup Complete!  ${NC}"
echo -e "${GREEN}=========================================${NC}"
echo -e "\nYour project has been configured for Stackbit visual editing with:"
echo -e "- GitHub Repository: ${BLUE}$GITHUB_REPO${NC}"
echo -e "- Netlify Site: ${BLUE}$NETLIFY_SITE.netlify.app${NC}"
echo -e "\nNext steps:"
echo -e "1. ${YELLOW}Commit and push changes to GitHub:${NC}"
echo -e "   git add ."
echo -e "   git commit -m \"Add Stackbit integration\""
echo -e "   git push origin main"
echo -e "\n2. ${YELLOW}Start the Stackbit visual editor:${NC}"
echo -e "   npm run stackbit:dev"
echo -e "\n3. ${YELLOW}For a production deployment:${NC}"
echo -e "   npm run stackbit:deploy"
echo -e "\nIf you encounter any issues, refer to the Stackbit documentation:"
echo -e "${BLUE}https://docs.stackbit.com/${NC}"