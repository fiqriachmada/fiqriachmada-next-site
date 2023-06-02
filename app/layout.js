import './globals.css';
import { Inter } from 'next/font/google';
import HeaderNavbar from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'fiqriachmada',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <main>
      <HeaderNavbar />
      <body className={inter.className}>{children}</body>
    </main>
  );
}
