import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

const routes = ['', '/who-we-are', '/how-we-do-it', '/our-work', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
