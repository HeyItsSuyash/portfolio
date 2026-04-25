import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Suyash Shukla — Full-Stack Engineer & ML Practitioner',
  description:
    'Portfolio of Suyash Shukla — Full-stack engineer, ML practitioner & founder. Built Prayukti vLAB (400+ users), EarnBuddy SaaS (1000+ users), Voice AI agents, and published LLM research with Taylor & Francis. CS @ MMMUT Gorakhpur | Data Science @ IIT Madras.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
