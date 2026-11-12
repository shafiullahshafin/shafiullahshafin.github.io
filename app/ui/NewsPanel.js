'use client';

import { useState } from 'react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import RichText from './RichText';

const TYPE_LABEL = {
  paper: 'Paper',
  award: 'Award',
  career: 'Career',
  service: 'Service',
  release: 'Release',
  milestone: 'Milestone',
};

const COLLAPSED = 5;

export default function NewsPanel({ items }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="news card" aria-labelledby="news-title">
      <header className="news-head">
        <h2 id="news-title">
          <Newspaper size={15} aria-hidden="true" /> News
        </h2>
      </header>

      <ol className={`news-list ${expanded ? 'is-expanded' : ''}`}>
        {/* Desktop: the whole list scrolls inside the sidebar. Mobile: first few, then "Show all". */}
        {items.map((n, i) => (
          <li key={i} className={`news-item ${i >= COLLAPSED ? 'news-extra' : ''}`} data-type={n.type}>
            <div className="news-meta">
              <time dateTime={n.date}>{n.label}</time>
              <span className="news-type">{TYPE_LABEL[n.type] ?? n.type}</span>
            </div>
            <p className="news-text">
              <RichText text={n.text} />
              {n.href && (
                <a href={n.href} target="_blank" rel="noopener noreferrer" className="news-link" aria-label="Read more">
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </p>
          </li>
        ))}
      </ol>

      {items.length > COLLAPSED && (
        <button type="button" className="news-more" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? 'Show recent only' : `Show all ${items.length} updates`}
        </button>
      )}
    </section>
  );
}
