import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { profile } from './data/site';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-card card">
        <p className="not-found-code">404</p>
        <h1>Page not found</h1>
        <p className="muted">The page you’re looking for doesn’t exist or has moved.</p>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft size={14} aria-hidden="true" /> Back to {profile.name}
        </Link>
      </div>
    </main>
  );
}
