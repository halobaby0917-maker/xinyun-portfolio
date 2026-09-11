import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="#top" className="wordmark" aria-label="Back to top">
          XL<span className="wordmark-dot" aria-hidden="true" />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="#work">Selected Work</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
