import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Options for Kirill Markin\'s Services',
  description: 'Select your preferred payment method for Kirill Markin\'s professional services. Currently supporting Stripe for secure credit card, Apple Pay and Google Pay payments.',
  openGraph: {
    title: 'Payment Options for Kirill Markin\'s Services',
    description: 'Select your preferred payment method for Kirill Markin\'s professional services. Currently supporting Stripe for secure credit card, Apple Pay and Google Pay payments.',
    url: 'https://kirill-markin.com/pay/',
    images: [
      {
        url: '/images/payment-options.webp',
        width: 1200,
        height: 630,
        alt: 'Payment options for Kirill Markin\'s services',
      }
    ],
    type: 'website',
    siteName: 'Kirill Markin',
    locale: 'en_US',
  },
  twitter: {
    title: 'Payment Options for Kirill Markin\'s Services',
    description: 'Select your preferred payment method for Kirill Markin\'s professional services.',
    images: ['/images/payment-options.webp'],
  },
  alternates: {
    canonical: 'https://kirill-markin.com/pay/',
  },
};

export default function PayPage() {
  return (
    <div className={styles.paymentOptionsContainer}>
      <h1>PAYMENT OPTIONS</h1>
      <p>Please select your preferred payment method:</p>

      <div className={styles.paymentMethods}>
        <Link href="/pay/stripe/" className={styles.paymentMethod}>
          <div className={styles.paymentMethodLogo}>
            <Image
              src="/icons/payment/stripe-logo.svg"
              alt="Stripe"
              className={styles.stripeLogo}
              width={60}
              height={40}
            />
          </div>
          <div className={styles.paymentMethodDetails}>
            <h2>Pay with Stripe</h2>
            <p>Secure payments via credit card, Apple Pay, and Google Pay</p>
          </div>
        </Link>

        {/* Additional payment methods can be added here in the future */}
      </div>
    </div>
  );
} 