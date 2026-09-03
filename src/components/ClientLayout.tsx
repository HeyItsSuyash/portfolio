'use client';

import { usePathname } from 'next/navigation';
import CustomCursor from "@/components/CustomCursor";
import Nav from '@/components/Nav';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKnowledgePage = pathname === '/knowledge' || pathname?.startsWith('/knowledge/');

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      {!isKnowledgePage && <Nav />}
      {children}
    </>
  );
}



