import { Inter } from 'next/font/google';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "DriveHire - Professional Driver Hiring Platform",
  description: "DriveHire is a professional driver hiring platform that connects drivers with employers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
