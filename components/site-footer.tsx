import { profileLinks } from '@/data/portfolio';

export function SiteFooter() {
  return (
    <footer id="contact" className="contact-section">
      <div className="site-shell">
        <span className="eyebrow">Contact</span>
        <div className="contact-grid">
          <h2>Let’s make something<br />people choose to use.</h2>
          <div className="contact-panel">
            <p>AI Product、Growth、GTM 或 Founder Associate 机会，欢迎联系。</p>
            <div className="contact-links">
              <a href={profileLinks.email.url}>
                <strong>{profileLinks.email.label}</strong><small>{profileLinks.email.value} ↗</small>
              </a>
              <a href={profileLinks.github.url} target="_blank" rel="noreferrer">
                <strong>{profileLinks.github.label}</strong><small>{profileLinks.github.value} ↗</small>
              </a>
              <a href={profileLinks.xiaohongshu.url} target="_blank" rel="noreferrer">
                <strong>{profileLinks.xiaohongshu.label}</strong><small>{profileLinks.xiaohongshu.value} ↗</small>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <p>梁馨匀 / Xinyun Leung</p>
          <p>AI Product × Growth</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
