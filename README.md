# Newsletter Website

A modern, beautiful newsletter website built with Next.js, React, and Tailwind CSS.

## Features

- 📧 Email subscription form
- 📰 Newsletter archive page
- 📝 Individual newsletter post pages
- 🎨 Modern, responsive design
- ⚡ Fast and optimized
- 🎯 SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── archive/            # Archive page
│   └── newsletter/[slug]/  # Individual newsletter pages
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Hero section
│   ├── Newsletter.tsx      # Subscription form
│   └── LatestPosts.tsx     # Latest newsletters display
├── data/
│   └── newsletters.ts      # Newsletter content
└── public/                 # Static assets
```

## Adding New Newsletters

To add a new newsletter, edit `data/newsletters.ts` and add a new entry to the array:

```typescript
{
  id: 6,
  slug: 'your-newsletter-slug',
  title: 'Your Newsletter Title',
  excerpt: 'A brief description...',
  content: `<h2>Your content here</h2>...`,
  date: '2024-12-23',
  readTime: 5,
  tags: ['Tag1', 'Tag2']
}
```

## Customization

### Branding

- Update the site name in `components/Header.tsx`
- Modify colors in `tailwind.config.js`
- Update metadata in `app/layout.tsx`

### Newsletter Service Integration

The subscription form in `components/Newsletter.tsx` currently simulates a submission. Replace it with your preferred newsletter service (Mailchimp, ConvertKit, Substack, etc.):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // Add your API integration here
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy!

### Other Platforms

You can deploy to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

This project is open source and available under the MIT License.



