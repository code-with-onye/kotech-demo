import { MetadataRoute } from 'next';
import { BRANDS } from '@/config/brands';

export default function sitemap(): MetadataRoute.Sitemap {
  const brandUrls = Object.entries(BRANDS).map(([id, brand]) => ({
    url: `${brand.url}/cleaning/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://kotechdemo.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    ...brandUrls,
  ];
}
