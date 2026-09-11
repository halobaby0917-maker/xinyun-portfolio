import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { profileLinks, profileMetrics, projects } from '@/data/portfolio';

const primaryProjects = [projects[0], projects[1], projects[4]];
const moreProjects = [projects[2], projects[3], projects[5]];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero-section">
          <div className="site-shell hero-inner">
            <div className="hero-status">
              <span>Based in Shanghai</span>
              <span>Selected work · 2022—2026</span>
            </div>
            <div className="hero-main">
              <div className="hero-name-block">
                <p className="hero-name-cn">梁馨匀</p>
                <p className="hero-name-en">Xinyun Leung</p>
              </div>
              <div className="hero-positioning">
                <p className="eyebrow">AI Product × Growth</p>
                <h1>From user insight<br />to <em>MVP</em> to real-world validation.</h1>
              </div>
            </div>
            <div className="hero-bottom">
              <p className="hero-intro">
                心理学、内容创作与 AI 产品实践背景。关注人为什么使用产品、为什么愿意分享，
                以及如何借助 AI 快速把一个想法变成真实可用的东西。
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <Link className="action-link action-link-primary" href="#work">View Selected Work <span aria-hidden="true">↓</span></Link>
                <a className="action-link" href="https://dbti-test.pages.dev/" target="_blank" rel="noreferrer">DBTI Live ↗</a>
                <a className="action-link" href={profileLinks.email.url}>Email ↗</a>
              </div>
            </div>
            <dl className="metrics-strip">
              {profileMetrics.map((metric) => (
                <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="content-section work-section">
          <div className="site-shell">
            <div className="section-heading">
              <span className="eyebrow">Selected Work</span>
              <div>
                <h2>Built to be used.<br />Tested in the real world.</h2>
                <p>三个核心案例，连接产品判断、真实交付与增长结果。</p>
              </div>
            </div>
            <div className="project-list">
              {primaryProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="more-work">
              <span className="eyebrow">More work / Detailed cases coming soon</span>
              <div className="more-work-grid">
                {moreProjects.map((project) => (
                  <article key={project.slug}>
                    <span>{project.index}</span>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
