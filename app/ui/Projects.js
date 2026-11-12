import { ExternalLink, PlayCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

function Preview({ preview, name }) {
  if (!preview) return null;

  if (preview.image) {
    return (
      <div className="proj-preview proj-preview-img">
        <img src={preview.image} alt={`${name} cover`} loading="lazy" />
      </div>
    );
  }

  return null;
}

function Card({ p }) {
  // Order (left → right): external links, repository, then the year at the end.
  const links = [
    p.demo && { href: p.demo, label: 'Live demo', Icon: ExternalLink },
    p.video && { href: p.video, label: 'Video walkthrough', Icon: PlayCircle },
    p.github && { href: p.github, label: 'Code on GitHub', Icon: FaGithub },
  ].filter(Boolean);

  return (
    <article className="proj card">
      <Preview preview={p.preview} name={p.name} />
      <div className="proj-body">
        <header className="proj-head">
          <h3>{p.name}</h3>
          <div className="proj-meta">
            {links.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
                aria-label={`${p.name}: ${label}`}
                title={label}
              >
                <Icon size={15} aria-hidden="true" />
              </a>
            ))}
            <span className="proj-year">{p.year}</span>
          </div>
        </header>
        <ul className="proj-stack" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="proj-blurb">{p.blurb}</p>
      </div>
    </article>
  );
}

export default function Projects({ items }) {
  return (
    <div className="proj-grid">
      {items.map((p) => (
        <Card key={p.name} p={p} />
      ))}
    </div>
  );
}
