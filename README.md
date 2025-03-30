# ProfessionalWebsiteGriffin

This project uses [Stackbit](https://www.stackbit.com/) for visual content editing with [Netlify](https://www.netlify.com/) hosting and [GitHub](https://github.com/) for source control.

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open Stackbit visual editor:
   ```bash
   npm run stackbit:dev
   ```

## Project Structure

- `content/` - Content files (pages, blog posts, data)
- `src/` - Source files (components, templates)
- `public/` - Static assets
- `stackbit.config.ts` - Stackbit configuration

## Deployment

This project is automatically deployed to Netlify when changes are pushed to the main branch of the GitHub repository.

## Content Editing

1. Use the Stackbit visual editor (`npm run stackbit:dev`)
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
