# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, optimized for deployment on Vercel.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js
- 🎭 Smooth animations with Framer Motion
- 🌈 Customizable color scheme
- 📧 Contact form
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the description and tagline
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Replace the placeholder image
   - Update the about text
   - Modify experience and project counts

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skills as needed
   - Update icons and colors

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update GitHub and demo links
   - Add project images

5. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Connect the form to a backend service (e.g., Formspree, EmailJS)

6. **Metadata** (`app/layout.tsx`):
   - Update the title and description

## Deployment to Vercel

1. Push your code to GitHub

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Deploy:
   - Click "Deploy"
   - Your site will be live in minutes!

### Alternative: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── public/             # Static assets
└── package.json        # Dependencies
```

## License

MIT License - feel free to use this template for your own portfolio!

