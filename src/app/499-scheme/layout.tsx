import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '₹499 Build Initiative — Turning Ideas Into Working Software',
  description:
    'A quick-build initiative by Suyash Shukla to turn small, impactful ideas into working web apps, Chrome extensions, tools, or automations for ₹499.',
  alternates: {
    canonical: '/499-scheme',
  },
  openGraph: {
    title: '₹499 Build Initiative | Suyash Shukla',
    description:
      'Turn your idea into a working build in a few days. Web apps, tools, Chrome extensions, and automations built by Suyash Shukla.',
    url: '/499-scheme',
  },
};

export default function SchemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
