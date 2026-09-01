import type { Metadata } from 'next';
import './globals.css';
import './variables.css';
import './components.css';
import { Bodoni_Moda, Raleway, Metamorphous, Outfit, Cormorant_Garamond } from 'next/font/google';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--clay-heading-font',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-raleway',
});

const metamorphous = Metamorphous({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-metamorphous',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Suyash Shukla | Portfolio | Building @ ₹499',
  description:
    'Full-stack engineer, ML practitioner & founder. Built Prayukti vLAB (400+ users), EarnBuddy SaaS (1000+ users), Voice AI agents, and published LLM research with Taylor & Francis. CS @ MMMUT Gorakhpur | Data Science @ IIT Madras.',
  icons: {
    icon: '/images/logo/logo.png',
    shortcut: '/images/logo/logo.png',
    apple: '/images/logo/logo.png',
  },
  keywords: [
    'Suyash Shukla',
    'Full Stack Engineer',
    'ML Engineer',
    'AI Engineer',
    'Portfolio',
    'MMMUT Gorakhpur',
    'IIT Madras',
    'Prayukti vLAB',
    'EarnBuddy',
    'Caller.work',
    'LangChain',
    'LangGraph',
    'Next.js',
    'React',
    'Node.js',
    'FastAPI',
    'LLM',
    'RAG',
    'Machine Learning',
    'Data Science',
    'Software Engineer India',
  ],
  authors: [{ name: 'Suyash Shukla', url: 'https://github.com/HeyItsSuyash' }],
  creator: 'Suyash Shukla',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heyitssuyash.github.io/portfolio',
    siteName: 'Suyash Shukla — Portfolio',
    title: 'Suyash Shukla — Full-Stack Engineer & ML Practitioner',
    description:
      'Full-stack engineer and ML practitioner. Built Prayukti vLAB, EarnBuddy SaaS, agentic AI pipelines & Voice AI systems. CS @ MMMUT | DS @ IIT Madras.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suyash Shukla — Full-Stack Engineer & ML Practitioner',
    description:
      'Full-stack engineer and ML practitioner. Built Prayukti vLAB, EarnBuddy SaaS, agentic AI pipelines & Voice AI systems.',
    creator: '@HeyItsSuyash',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ClientLayout from '@/components/ClientLayout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${raleway.variable} ${metamorphous.variable} ${outfit.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
