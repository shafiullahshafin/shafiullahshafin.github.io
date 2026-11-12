import { profile } from './data/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: `${profile.site}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
