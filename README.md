# Online CV & Portfolio

A minimalist, brutalist-inspired personal portfolio and CV built with Next.js 14, Tailwind CSS, and Framer Motion. Designed with a focus on typography, performance, and clean aesthetics.

## Features

- **Multilingual Support**: Toggle between Portuguese (PT) and English (EN) with persistence.
- **Dark Mode**: High-contrast dark mode with smooth view transitions.
- **Static Content**: All content is managed via Markdown files in the `content/` directory.
- **Print Optimized**: Dedicated CV view (`/cv`) optimized for high-quality PDF export and printing.
- **Responsive Design**: Mobile-first approach with micro-tunes for all viewports.
- **GitHub Actions Deployment**: Automated deployment pipeline for GitHub Pages.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Content**: MDX / Markdown (gray-matter + marked)
- **Animation**: Framer Motion & CSS View Transitions

## Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eliseucbrito/eliseucbrito.github.io.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components.
- `src/lib/`: Helper functions and utilities.
- `src/locales/`: UI translations.
- `src/store/`: Zustand stores for global state.
- `content/`: Markdown files containing the portfolio content (PT/EN).
- `public/`: Static assets.

## Deployment

The project is configured for static export to GitHub Pages. 

```bash
npm run build
```

The output will be in the `out/` directory. Deployments are handled automatically via GitHub Actions (see `.github/workflows/deploy.yml`).

## License

MIT
