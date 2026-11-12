import { profile } from './data/site';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${profile.site}/sitemap.xml`,
    host: profile.site,
  };
}
