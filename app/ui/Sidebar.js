import { FileText, Mail, MapPin } from 'lucide-react';
import { profile, socials, news } from '../data/site';
import SocialIcon from './SocialIcon';
import CopyButton from './CopyButton';
import NewsPanel from './NewsPanel';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function prepareNews() {
  return news.map((n) => {
    const [y, m] = n.date.split('-').map(Number);
    return { ...n, label: `${MONTHS[m - 1]} ${y}` };
  });
}

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Profile and news">
      <div className="sidebar-inner">
        <section className="profile card">
          <div className="profile-head">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="avatar" width={76} height={76} />
            <div className="profile-id">
              <h1 className="profile-name">{profile.name}</h1>
              <p className="profile-role">{profile.role}</p>
              <p className="profile-org">{profile.org}</p>
            </div>
          </div>

          <ul className="socials" aria-label="Profiles">
            {socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="icon-btn brand-icon"
                  data-brand={s.id}
                >
                  <SocialIcon id={s.id} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="contact-list">
            <li>
              <Mail size={14} aria-hidden="true" className="ico-mail" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <CopyButton value={profile.email} label="Copy email" className="copy-inline" />
            </li>
            <li>
              <MapPin size={14} aria-hidden="true" className="ico-location" />
              <span>{profile.location}</span>
            </li>
          </ul>

          {profile.cv && (
            <a href={profile.cv} className="btn btn-primary profile-cv" target="_blank" rel="noopener noreferrer">
              <FileText size={14} aria-hidden="true" /> Download CV
            </a>
          )}
        </section>

        <NewsPanel items={prepareNews()} />
      </div>
    </aside>
  );
}
