import Header from '@/app/components/Header';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Book Commerce',
  description: '本のECサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={notoSansJp.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
