import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin', // Example: block admin pages
      },
    ],
    sitemap: 'https://nextjsapp-3x7u.vercel.app/sitemap.xml',
  };
}