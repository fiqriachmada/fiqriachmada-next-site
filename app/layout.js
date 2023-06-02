import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import HeaderNavbar from './header';

const inter = Inter({ subsets: ['latin-ext'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'fiqriachmada',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <main>
      {/* <HeaderNavbar /> */}
      {/* <body className={inter.className}>{children}</body> */}
      <body className={jakarta.className}>{children}</body>
    </main>
  );
}
