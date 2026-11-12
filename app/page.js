import { ArrowUpRight } from 'lucide-react';
import {
  profile,
  socials,
  interests,
  publications,
  experience,
  service,
  projects,
  education,
  honors,
  skills,
} from './data/site';
import Sidebar from './ui/Sidebar';
import TopBar from './ui/TopBar';
import Publications from './ui/Publications';
import Projects from './ui/Projects';
import RichText from './ui/RichText';

function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="section-head">
        <h2 id={`${id}-title`}>{title}</h2>
        {kicker && <p className="section-kicker">{kicker}</p>}
      </header>
      {children}
    </section>
  );
}

function Timeline({ items, render }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={i} className={`tl-item ${it.current ? 'is-current' : ''}`}>
          <span className="tl-dot" aria-hidden="true" />
          {render(it)}
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <div className="shell">
        <Sidebar />

        <div className="main">
          <TopBar />

          <main className="content">
            {/* ── About ─────────────────────────────────────────── */}
            <Section id="about" title="About">
              <div className="prose">
                <p>
                  Hi, I’m {profile.name}. I’m a Software Engineer on the AI team at {profile.org}. I hold a B.Sc. in
                  Computer Science and Engineering from RUET. I enjoy building software, exploring ideas and
                  understanding how things work beneath the surface.
                </p>
                <p>
                  My interest in research grew during my undergraduate years. Reading papers, testing ideas and
                  understanding why some approaches work better than others still excite me. My research spans software
                  engineering, particularly mining software repositories, and applied AI, including computer vision and
                  medical image analysis, and I also serve as a reviewer for the MSR conference. At HawarIT, my work
                  focuses on computer vision and 3D reconstruction, mainly object detection, segmentation and model
                  deployment. Besides, I build automated pipelines and handle large-scale data processing.
                </p>
                <p>
                  Most of what I know comes from hands-on work, like solving problems, writing a lot of code and
                  building prototypes to test ideas. Breaking complex problems into simpler parts and refining solutions
                  step by step is how I usually work. Python and C++ are my main languages, with PyTorch and OpenCV for
                  most of my vision work. Clear communication and teamwork matter to me, and during school and
                  university I helped organize and volunteered at academic and technical events. Every day, I try to be
                  a little better than yesterday.
                </p>
                <p>
                  Away from the desk, I travel whenever I can, go hiking, and spend time with friends. On slower days I
                  watch movies or listen to podcasts. I also enjoy talking with strangers about anything at all.
                </p>
                <p>
                  If you find my work relevant to your research, or would like to discuss a potential collaboration,
                  please feel free to get in touch. I promise to reply faster than Reviewer 2.
                </p>
              </div>

              <div className="interests">
                <h3 className="mini-title">Research Interests</h3>
                <ul className="tag-list">
                  {interests.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* ── Publications ──────────────────────────────────── */}
            <Section
              id="publications"

              title="Publications"
              kicker={
                <>
                  Full list on{' '}
                  <a href={socials.find((s) => s.id === 'scholar').href} target="_blank" rel="noopener noreferrer">
                    Google Scholar <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </>
              }
            >
              <Publications items={publications} self={profile.pubName} />
            </Section>

            {/* ── Experience & Service ──────────────────────────── */}
            <Section id="experience" title="Experience">
              <Timeline
                items={experience}
                render={(e) => (
                  <div className="tl-body">
                    <div className="tl-row">
                      <h3>{e.role}</h3>
                      <span className="tl-date">{e.period}</span>
                    </div>
                    <p className="tl-org">
                      {e.org} · <span>{e.location}</span>
                    </p>
                    <ul className="bullets">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              />

              <h3 className="sub-title">Academic Service</h3>
              <Timeline
                items={service}
                render={(e) => (
                  <div className="tl-body">
                    <div className="tl-row">
                      <h3>
                        {e.role}
                        {e.href && (
                          <a
                            href={e.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-link"
                            aria-label={`${e.role}: official committee page`}
                            title="Official committee page"
                          >
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        )}
                      </h3>
                      <span className="tl-date">{e.period}</span>
                    </div>
                    <p className="tl-org">
                      {e.org}
                      {e.location && (
                        <>
                          {' '}
                          · <span>{e.location}</span>
                        </>
                      )}
                    </p>
                    <ul className="bullets">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              />
            </Section>

            {/* ── Education ─────────────────────────────────────── */}
            <Section id="education" title="Education">
              <Timeline
                items={education}
                render={(e) => (
                  <div className="tl-body">
                    <div className="tl-row">
                      <h3>{e.school}</h3>
                      <span className="tl-date">{e.period}</span>
                    </div>
                    <p className="tl-org">
                      {e.degree} · <span className="score">{e.score}</span>
                    </p>
                    {e.note && (
                      <p className="tl-note">
                        <RichText text={e.note} />
                      </p>
                    )}
                    {e.courses && (
                      <div className="courses">
                        <h4 className="mini-title">Relevant Coursework</h4>
                        <ul className="course-grid">
                          {e.courses.map((c) => (
                            <li key={c.code}>
                              <span className="course-code">{c.code}</span>
                              {c.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              />
            </Section>

            {/* ── Honors ────────────────────────────────────────── */}
            <Section id="honors" title="Honors & Awards">
              <ul className="honors">
                {honors.map((h) => (
                  <li key={h.title} className="honor">
                    <div className="tl-row">
                      <h3>
                        {h.title}
                        {h.href && (
                          <a
                            href={h.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-link"
                            aria-label={`${h.title}: official page`}
                            title="Official page"
                          >
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        )}
                      </h3>
                      <span className="tl-date">{h.date}</span>
                    </div>
                    <p className="tl-org">{h.org}</p>
                    {h.detail && <p className="tl-note">{h.detail}</p>}
                  </li>
                ))}
              </ul>
            </Section>

            {/* ── Projects ──────────────────────────────────────── */}
            <Section
              id="projects"

              title="Projects"
              kicker={
                <>
                  More on{' '}
                  <a href="https://github.com/shafiullahshafin" target="_blank" rel="noopener noreferrer">
                    GitHub <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </>
              }
            >
              <Projects items={projects} />
            </Section>

            {/* ── Skills ────────────────────────────────────────── */}
            <Section id="skills" title="Skills">
              <div className="skills">
                {skills.map((g) => (
                  <div key={g.group} className="skill-group">
                    <h3 className="mini-title">{g.group}</h3>
                    <ul className="tag-list">
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </main>

          <footer className="footer">
            <span>
              © {new Date().getFullYear()} {profile.name}
            </span>
            <span>Last updated {profile.updated}</span>
          </footer>
        </div>
      </div>
    </>
  );
}
