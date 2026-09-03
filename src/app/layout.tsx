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
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://heyitssuyash.github.io/portfolio'),
  title: {
    default: 'Suyash Shukla | Full-Stack Engineer & ML Practitioner',
    template: '%s | Suyash Shukla',
  },
  description:
    'Full-stack engineer, ML practitioner & founder. Built Prayukti vLAB (400+ users), EarnBuddy SaaS (1000+ users), Voice AI agents, and published LLM research with Taylor & Francis. CS @ MMMUT Gorakhpur | Data Science @ IIT Madras.',
  alternates: {
    canonical: '/',
  },
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
    images: [
      {
        url: '/images/avatar-images/usinglaptop.png',
        width: 1200,
        height: 630,
        alt: 'Suyash Shukla — Full-Stack Engineer & ML Practitioner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suyash Shukla — Full-Stack Engineer & ML Practitioner',
    description:
      'Full-stack engineer and ML practitioner. Built Prayukti vLAB, EarnBuddy SaaS, agentic AI pipelines & Voice AI systems.',
    creator: '@HeyItsSuyash',
    images: ['/images/avatar-images/usinglaptop.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://heyitssuyash.github.io/portfolio/#person',
      name: 'Suyash Shukla',
      alternateName: ['HeyItsSuyash', 'suyashshukla'],
      url: 'https://heyitssuyash.github.io/portfolio',
      image: 'https://heyitssuyash.github.io/portfolio/images/avatar-images/usinglaptop.png',
      jobTitle: 'Full-Stack Engineer & Machine Learning Practitioner',
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Madan Mohan Malaviya University of Technology (MMMUT)',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Indian Institute of Technology Madras (IIT Madras)',
        },
      ],
      sameAs: [
        'https://github.com/HeyItsSuyash',
        'https://linkedin.com/in/suyashshukla',
        'https://x.com/HeyItsSuyash',
        'https://www.producthunt.com/@heyitssuyash',
        'https://instagram.com/HeyItsSuyash',
        'https://bsky.app/profile/heyitssuyash.bsky.social',
      ],
      knowsAbout: [
        'Full Stack Development',
        'Machine Learning',
        'Agentic AI',
        'FastAPI',
        'React',
        'Next.js',
        'Distributed Systems',
        'Large Language Models',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://heyitssuyash.github.io/portfolio/#website',
      url: 'https://heyitssuyash.github.io/portfolio',
      name: 'Suyash Shukla Portfolio',
      description:
        'Portfolio of Suyash Shukla — Full-stack engineer, ML practitioner, researcher, and builder.',
      publisher: {
        '@id': 'https://heyitssuyash.github.io/portfolio/#person',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodoni.variable} ${raleway.variable} ${metamorphous.variable} ${outfit.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
