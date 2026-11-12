'use client';

import { useState } from 'react';
import { ArrowUpRight, Award, ChevronDown, Quote, ScrollText } from 'lucide-react';
import CopyButton from './CopyButton';

function Authors({ list, self }) {
  return (
    <p className="pub-authors">
      {list.map((a, i) => (
        <span key={a}>
          {self.includes(a) ? <strong className="me">{a}</strong> : a}
          {i < list.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

function Paper({ p, self }) {
  const [open, setOpen] = useState(null); // 'abstract' | 'bibtex' | null
  const toggle = (k) => setOpen((v) => (v === k ? null : k));
  const panelId = `${p.id}-panel`;
  const abbr = p.venueShort.replace(/\s*\d{4}$/, '');

  return (
    <article className={`pub ${p.award ? 'pub-awarded' : ''}`}>
      <div className="pub-aside">
        <span className="pub-abbr">{abbr}</span>
        <span className="pub-year">{p.year}</span>
      </div>

      <div className="pub-body">
        {p.award && (
          <p className="pub-award">
            <Award size={14} aria-hidden="true" /> {p.award}
          </p>
        )}

        <h3 className="pub-title">{p.title}</h3>

        <Authors list={p.authors} self={self} />

        <p className="pub-venue">
          <em>{p.venue}</em>
        </p>
        <p className="pub-meta">{p.location}</p>

        <div className="pub-foot">
          <div className="pub-actions">
            <button
              type="button"
              className={`chip-btn ${open === 'abstract' ? 'is-on' : ''}`}
              onClick={() => toggle('abstract')}
              aria-expanded={open === 'abstract'}
              aria-controls={panelId}
            >
              <ScrollText size={14} aria-hidden="true" /> Abstract
              <ChevronDown size={14} className="chev" aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`chip-btn ${open === 'bibtex' ? 'is-on' : ''}`}
              onClick={() => toggle('bibtex')}
              aria-expanded={open === 'bibtex'}
              aria-controls={panelId}
            >
              <Quote size={14} aria-hidden="true" /> Cite
              <ChevronDown size={14} className="chev" aria-hidden="true" />
            </button>
            <a
              className="chip-btn"
              href={`https://doi.org/${p.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`DOI: ${p.doi}`}
            >
              Paper <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <ul className="pub-tags" aria-label="Paper details">
            <li>{p.publisher}</li>
          </ul>
        </div>

        <div id={panelId} className={`pub-panel ${open ? 'is-open' : ''}`} hidden={!open}>
          {open === 'abstract' && <p className="pub-abstract">{p.abstract}</p>}
          {open === 'bibtex' && (
            <div className="bibtex">
              <CopyButton value={p.bibtex} label="Copy BibTeX" className="bibtex-copy" />
              <pre>
                <code>{p.bibtex}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Publications({ items, self }) {
  return (
    <div className="pub-list">
      {items.map((p) => (
        <Paper key={p.id} p={p} self={self} />
      ))}
    </div>
  );
}
