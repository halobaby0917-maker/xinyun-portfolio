import type { Metadata } from 'next';
import './globals.css';

const title = 'Xinyun Leung — AI Product × Growth';
const description =
  'AI product and growth portfolio covering MVP building, user insight, market validation and content growth.';

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title,
    description,
    siteName: 'Xinyun Leung Portfolio',
  },
  twitter: { card: 'summary', title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
