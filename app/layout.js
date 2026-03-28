import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Product Listing Page | Discover Our Products',
  description: 'Explore our wide range of products with advanced filters and seamless shopping experience.',
  openGraph: {
    title: 'Product Listing Page',
    description: 'Browse our collection of high-quality products.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
