import Link from 'next/link';
import styles from './not-found.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Kirill Markin',
  description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
  openGraph: {
    title: 'Page Not Found | Kirill Markin',
    description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    url: 'https://kirill-markin.com/404/',
    images: [
      {
        url: '/images/404.webp',
        width: 1200,
        height: 630,
        alt: 'Page Not Found',
      }
    ],
    type: 'website',
    siteName: 'Kirill Markin',
    locale: 'en_US',
  },
  twitter: {
    title: 'Page Not Found | Kirill Markin',
    description: 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    images: ['/images/404.webp'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className={styles.errorPageContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>
        Page Not Foun<span className={styles.glitchLetter}>d</span>
      </h2>
      <p className={styles.errorMessage}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={styles.errorBackButton}>
        BACK TO HOME
      </Link>
    </div>
  );
} 