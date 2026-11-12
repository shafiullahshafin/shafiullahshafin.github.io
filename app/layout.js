import Script from 'next/script';
import { Inter } from 'next/font/google';
import { profile } from './data/site';
import './globals.css';

const sans = Inter({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });

const description =
  'Software Engineer (R&D) at HawarIT working on computer vision and 3D reconstruction. ' +
  'Researcher in mining software repositories and applied deep learning; MSR 2025 Best Mining Challenge Paper Award.';

export const metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} | ${profile.role}`, template: `%s · ${profile.shortName}` },
  description,
  keywords: [
    'Shafiullah Shafin',
    'Md Shafiullah Shafin',
    'Md. Shafiullah Shafin',
    'Mohammad Shafiullah Shafin',
    'Artificial Intelligence',
    'Deep Learning',
    'Computer Vision',
    '3D Reconstruction',
    'Photogrammetry',
    'Geospatial AI',
    'Agentic AI',
    'Mining Software Repositories',
    'BIM',
    'Software Engineering Research',
    'RUET',
    'HawarIT',
  ],
  authors: [{ name: profile.name, url: profile.site }],
  openGraph: {
    type: 'profile',
    url: profile.site,
    title: profile.name,
    description,
    images: [{ url: profile.photo, width: 300, height: 300, alt: profile.name }],
  },
  twitter: { card: 'summary', title: profile.name, description, images: [profile.photo] },
  alternates: { canonical: '/' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1012' },
  ],
};

// Runs before paint so the chosen theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: ['Md Shafiullah Shafin', 'Mohammad Shafiullah Shafin'],
  jobTitle: profile.role,
  worksFor: { '@type': 'Organization', name: profile.org },
  alumniOf: 'Rajshahi University of Engineering & Technology',
  url: profile.site,
  image: profile.site + profile.photo,
  sameAs: [
    'https://github.com/shafiullahshafin',
    'https://www.linkedin.com/in/shafiullahshafin/',
    'https://scholar.google.com/citations?user=U-EgXLIAAAAJ',
    'https://orcid.org/0009-0008-7855-486X',
    'https://www.researchgate.net/profile/Md-Shafiullah-Shafin-2',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        {/* Privacy-friendly visit counter (no cookies, no personal data). Dashboard: shafiullahshafin.goatcounter.com */}
        <Script
          data-goatcounter="https://shafiullahshafin.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
